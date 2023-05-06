import GanttChart from "components/GanttChart";
import * as S from "./index.style";

function ProcessChart() {
  return (
    <S.Container>
      <S.Scheduler>
        <GanttChart isProcess />
      </S.Scheduler>
    </S.Container>
  );
}

export default ProcessChart;
