import { useProcessStore, useProcessorStore } from "store/setting";
import * as S from "../index.style";
import { Fragment } from "react";

function Overview() {
  const processors = useProcessorStore((state) => state.processors);
  const { processes, changeProcessTime } = useProcessStore();

  return (
    <S.OverviewContainer>
      <S.OverviewTitle>Processor Overview</S.OverviewTitle>
      <S.CoreList>
        {processors.map((processor) => (
          <S.OverviewCore
            key={processor.id}
            mainColor={processor.mainColor}
            subColor={processor.subColor}
          >
            <S.OverviewCoreName mainColor={processor.mainColor}>
              {processor.name}
            </S.OverviewCoreName>
            <S.OverviewCoreType>{processor.core.name}core</S.OverviewCoreType>
          </S.OverviewCore>
        ))}
      </S.CoreList>

      <S.OverviewProcessTitle>Process Overview</S.OverviewProcessTitle>
      <S.OverviewProcessListHeader>
        <S.OverviewProcessName color={"#5639B0"}>ID</S.OverviewProcessName>
        <S.OverviewProcessName color={"#5639B0"}>AT</S.OverviewProcessName>
        <S.OverviewProcessName color={"#5639B0"}>BT</S.OverviewProcessName>
      </S.OverviewProcessListHeader>
      <S.ProcessList>
        {processes.map((process, index) => (
          <Fragment key={process.id}>
            <S.OverviewProcessName color={process.mainColor}>
              {process.name}
            </S.OverviewProcessName>
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
          </Fragment>
        ))}
      </S.ProcessList>
    </S.OverviewContainer>
  );
}

export default Overview;
