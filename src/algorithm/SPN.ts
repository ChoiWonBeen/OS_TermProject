import { Process, ProcessResult, ProcessorResult, Scheduling } from "models";

export const SPN: Scheduling = (processors, processes) => {
  const readyQueue: Process[] = [];

  const processResultList: ProcessResult[] = processes.map((process) => ({
    processId: process.id,
    arrivalTime: process.arrivalTime,
    burstTime: process.burstTime,
    waitingTime: 0,
    turnaroundTime: 0,
    normalizedTurnaroundTime: 0,
    processorAllocation: [],
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

    // 프로세서가 비어있으면 readyQueue에서 프로세스를 꺼내서 넣는다.
    processors.forEach((processor, index) => {
      if (processor.currentProcess === null) {
        if (readyQueue.length > 0) {
          // 가장 짧은 burstTime을 가진 프로세스를 찾는다.
          const process = readyQueue.reduce((prev, curr) => {
            return prev.burstTime < curr.burstTime ? prev : curr;
          });
          readyQueue.splice(
            readyQueue.findIndex((rqProcess) => rqProcess.id === process.id),
            1
          );

          if (process) {
            processor.currentProcess = process;
          }
          if (processorResultList[index].processAllocation[currentTime - 1] === null || currentTime === 0) {
            processorResultList[index].totalPower += processor.core.startingPower;
          }
        }
      }
    });

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
        if (processor.currentProcess.leftWork <= 0) {
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
