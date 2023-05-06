import { useState } from "react";
import * as S from "./index.style";
import GanttChart from "components/GanttChart";

function ProcessorChart() {
  return (
    <S.Container>
      <S.Scheduler>
        <GanttChart isProcess={false} />
      </S.Scheduler>
    </S.Container>
  );
}

export default ProcessorChart;
