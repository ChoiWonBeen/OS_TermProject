import { Fragment } from "react";
import * as S from "./index.style";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSchedulerStore } from "store/scheduler";
import { useProcessStore, useProcessorStore } from "store/setting";

ChartJS.register(ArcElement, Tooltip, Legend);

function Result() {
  const result = useSchedulerStore((state) => state.schedulerResult);
  const processors = useProcessorStore((state) => state.processors);
  const processes = useProcessStore((state) => state.processes);
  const algorithm = useSchedulerStore((state) => state.scheduler.algorithm);
  const varienceMemory = useSchedulerStore((state) => state.varienceMemory);
  const isOsim = algorithm === "OSim" || algorithm === "VSRR";

  return (
    <S.Container>
      <S.Background>
        <S.Heading>Power Consumption</S.Heading>
        <S.ChartWrapper>
          {result && (
            <Doughnut
              data={{
                labels: result.processorResultList.map((_, index) => processors[index].name),
                datasets: [
                  {
                    data: result.processorResultList.map((processorResult) => processorResult.totalPower),
                    backgroundColor: processors.map((processor) => processor.mainColor),
                    borderWidth: 0,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "right",
                    labels: {
                      color: "#ffffff",
                    },
                  },
                },
                cutout: "70%",
              }}
            />
          )}
        </S.ChartWrapper>

        {result && (
          <S.TotalPower>
            Total
            <br />
            <em>{result.processorResultList.reduce((prev, curr) => prev + curr.totalPower, 0).toFixed(1)}W</em>
          </S.TotalPower>
        )}
      </S.Background>

      <S.BackgroundRight>
        <S.Heading>
          <span>Scheduling Result</span>
          {isOsim && <S.Varience>분산: {varienceMemory.toFixed(2)}</S.Varience>}
        </S.Heading>
        <S.ScheduleResultHeader isOsim={isOsim}>
          <S.ProcessName color={"#5639B0"}>ID</S.ProcessName>
          <S.ProcessName color={"#5639B0"}>AT</S.ProcessName>
          <S.ProcessName color={"#5639B0"}>BT</S.ProcessName>
          <S.ProcessName color={"#5639B0"}>WT</S.ProcessName>
          <S.ProcessName color={"#5639B0"}>TT</S.ProcessName>
          <S.ProcessName color={"#5639B0"}>NTT</S.ProcessName>
          {isOsim && <S.ProcessName color={"#5639B0"}>Memory</S.ProcessName>}
        </S.ScheduleResultHeader>
        <S.ScheduleResultContainer>
          <S.ScheduleResult isOsim={isOsim}>
            {result &&
              result.processResultList.map((processResult, index) => (
                <Fragment key={processResult.processId}>
                  <S.ProcessName color={processes[index].mainColor}>{processes[index].name}</S.ProcessName>
                  <S.ProcessTime>{processResult.arrivalTime}</S.ProcessTime>
                  <S.ProcessTime>{processResult.burstTime}</S.ProcessTime>
                  <S.ProcessTime>{processResult.waitingTime}</S.ProcessTime>
                  <S.ProcessTime>{processResult.turnaroundTime}</S.ProcessTime>
                  <S.ProcessTime>{processResult.normalizedTurnaroundTime.toFixed(2)}</S.ProcessTime>
                  {isOsim && <S.ProcessTime>{processResult.memory?.toFixed(2)}</S.ProcessTime>}
                </Fragment>
              ))}
          </S.ScheduleResult>
        </S.ScheduleResultContainer>
      </S.BackgroundRight>
    </S.Container>
  );
}

export default Result;
