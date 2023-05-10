import { useProcessStore, useProcessorStore } from "store/setting";
import * as S from "../index.style";
import { Fragment } from "react";
import { useSchedulerStore } from "store/scheduler";

function Overview() {
  const processors = useProcessorStore((state) => state.processors);
  const { processes, changeProcessTime } = useProcessStore();
  const algorithm = useSchedulerStore((state) => state.scheduler.algorithm);
  const isOsim = algorithm === "OSim" || algorithm === "VSRR";

  return (
    <S.OverviewContainer>
      <S.OverviewTitle>Processor Overview</S.OverviewTitle>
      <S.CoreList>
        {processors.map((processor) => (
          <S.OverviewCore key={processor.id} mainColor={processor.mainColor} subColor={processor.subColor}>
            <S.OverviewCoreName mainColor={processor.mainColor}>{processor.name}</S.OverviewCoreName>
            <S.OverviewCoreType>{processor.core.name}core</S.OverviewCoreType>
          </S.OverviewCore>
        ))}
      </S.CoreList>

      <S.OverviewProcessTitle>Process Overview</S.OverviewProcessTitle>
      <S.OverviewProcessListHeader isOsim={isOsim}>
        <S.OverviewProcessName color={"#5639B0"}>ID</S.OverviewProcessName>
        <S.OverviewProcessName color={"#5639B0"}>AT</S.OverviewProcessName>
        <S.OverviewProcessName color={"#5639B0"}>BT</S.OverviewProcessName>
        {isOsim && <S.OverviewProcessName color={"#5639B0"}>LV</S.OverviewProcessName>}
      </S.OverviewProcessListHeader>
      <S.ProcessList isOsim={isOsim}>
        {processes.map((process, index) => (
          <Fragment key={process.id}>
            <S.OverviewProcessName color={process.mainColor}>{process.name}</S.OverviewProcessName>
            <S.OverviewProcessTime
              type="number"
              min="0"
              value={process.arrivalTime}
              onChange={(e) => {
                changeProcessTime(index, Number(e.target.value), true);
              }}
            />
            <S.OverviewProcessTime
              type="number"
              min="0"
              value={process.burstTime}
              onChange={(e) => {
                changeProcessTime(index, Number(e.target.value), false);
              }}
            />
            {isOsim && (
              <S.OverviewProcessTime
                type="number"
                min="1"
                value={process.level}
                onChange={(e) => {
                  changeProcessTime(index, Number(e.target.value), false, true);
                }}
              />
            )}
          </Fragment>
        ))}
      </S.ProcessList>
    </S.OverviewContainer>
  );
}

export default Overview;
