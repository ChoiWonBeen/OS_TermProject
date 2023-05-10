import { Process, ProcessResult, Processor, ProcessorResult, Scheduling } from "models";

type OSimProcessResult = ProcessResult & { studyRate: number; TQ: number; memory: number };

export const OSim: Scheduling = (processors, processes, timeQuantum) => {
  const readyQueue: Process[] = [];
  const TQ = timeQuantum!;

  const processResultList: OSimProcessResult[] = processes.map((process) => ({
    processId: process.id,
    arrivalTime: process.arrivalTime,
    burstTime: process.burstTime,
    waitingTime: 0,
    turnaroundTime: 0,
    normalizedTurnaroundTime: 0,
    processorAllocation: [],
    studyRate: 100,
    memory: 100,
    TQ,
  }));

  const processorResultList: ProcessorResult[] = processors.map((processor) => ({
    processorId: processor.id,
    totalPower: 0,
    processAllocation: [],
  }));

  let time = 0;

  while (processes.some((process) => process.leftWork > 0)) {
    let currentTime = time;
    // 시작 전 프로세스를 readyQueue에 넣는다.
    processes.forEach((process) => {
      if (process.arrivalTime === currentTime) {
        readyQueue.push(process);
      }
    });

    // 프로세서가 비어있으면 readyQueue에서 프로세스를 꺼내서 넣는다. (P코어 우선)
    const PCoreProcessors = processors.filter((processor) => processor.core.name === "P");
    const ECoreProcessors = processors.filter((processor) => processor.core.name === "E");

    const fillProcessors = (processor: Processor) => {
      if (processor.currentProcess === null) {
        if (readyQueue.length > 0) {
          // memory가 가장 낮은 프로세스를 찾는다
          const process = readyQueue.reduce((prev, curr) => {
            const prevProcessResult = processResultList.find((processResult) => processResult.processId === prev.id)!;
            const currProcessResult = processResultList.find((processResult) => processResult.processId === curr.id)!;

            return prevProcessResult.memory < currProcessResult.memory ? prev : curr;
          });

          if (process) {
            readyQueue.splice(
              readyQueue.findIndex((rqProcess) => rqProcess.id === process.id),
              1
            );

            processor.currentProcess = process;
            const processIndex = processResultList.findIndex((processResult) => processResult.processId === process.id);
            processResultList[processIndex].TQ = Math.max(
              Math.round(TQ + ((80 - processResultList[processIndex].memory) / 100) * TQ),
              1
            );
          }

          const index = processorResultList.findIndex(
            (processorResult) => processorResult.processorId === processor.id
          );
          // 시동 전력 기록
          if (processorResultList[index].processAllocation[currentTime - 1] === null || currentTime === 0) {
            processorResultList[index].totalPower += processor.core.startingPower;
          }
        }
      }
    };

    PCoreProcessors.forEach(fillProcessors);
    ECoreProcessors.forEach(fillProcessors);

    // 프로세스의 작업 진행을 기록한다.
    processes.forEach((process, index) => {
      if (processors.some((processor) => processor.currentProcess?.id === process.id)) {
        const processorIndex = processors.findIndex((processor) => processor.currentProcess?.id === process.id);
        processResultList[index].processorAllocation.push(processors[processorIndex].id);
        processorResultList[processorIndex].processAllocation.push(process.id);
        // 사용 전력 기록
        processorResultList[processorIndex].totalPower += processors[processorIndex].core.powerEfficiency;
      } else {
        processResultList[index].processorAllocation.push(null);
      }
    });

    // 작업을 하지 않을 프로세서에 대해 프로세스 할당을 null로 기록한다
    processors.forEach((processor, index) => {
      if (!processor.currentProcess) {
        processorResultList[index].processAllocation.push(null);
      }
    });

    // 프로세서가 작업을 수행한다.
    processors.forEach((processor) => {
      if (processor.currentProcess) {
        processor.currentProcess.leftWork -= processor.core.timeEfficiency;

        // 일을 한 만큼 studyRate를 증가시킨다.
        const processIndex = processResultList.findIndex(
          (processResult) => processResult.processId === processor.currentProcess?.id
        );
        processResultList[processIndex].studyRate +=
          processor.core.timeEfficiency * (1 / Math.max(1, processor.currentProcess.level));

        // TQ값을 줄인다.
        processResultList[processIndex].TQ -= 1;
        if (processor.currentProcess.leftWork <= 0) {
          processor.currentProcess = null;
        } else if (processResultList[processIndex].TQ === 0) {
          readyQueue.push(processor.currentProcess);
          processor.currentProcess = null;
        }
      }
    });

    time++;
    // readyQueue에 있는 프로세스들의 waitingTime을 1씩 증가시킨다.
    readyQueue.forEach((process) => {
      const processIndex = processResultList.findIndex((processResult) => processResult.processId === process.id);
      processResultList[processIndex].waitingTime++;
    });

    // 모든 프로세스의 memory를 최신화한다. (studyRate가 증가한 process는 증가, 나머진 감소)
    processResultList.forEach((processResult, index) => {
      if (processes[index].arrivalTime > currentTime) return;
      if (processes[index].leftWork <= 0) return;
      processResult.memory =
        100 *
        Math.exp(
          (-(currentTime - processes[index].arrivalTime) / processResult.studyRate) * processes[index].level ** 1
        );
    });
  }

  // turnaroundTime, normalizedTurnaroundTime을 계산한다.
  processResultList.forEach((processResult) => {
    processResult.turnaroundTime = processResult.burstTime + processResult.waitingTime;
    processResult.normalizedTurnaroundTime = processResult.turnaroundTime / processResult.burstTime;
  });

  // leftwork 초기화
  processes.forEach((process) => {
    process.leftWork = process.burstTime;
  });

  return {
    processResultList,
    processorResultList,
    totalTime: time,
  };
};
