import { ALGORITHM_LIST } from "static/algorithm";
import * as S from "./index.style";
import { MAIN_COLOR_TABLE, SUB_COLOR_TABLE } from "static/color";
import { useSchedulerStore } from "store/scheduler";

function TopNav() {
  const { scheduler, changeAlgorithm: setType } = useSchedulerStore();
  return (
    <S.Container>
      {ALGORITHM_LIST.map((algorithm, index) => (
        <S.HeaderItem
          key={index}
          selected={scheduler.algorithm === algorithm}
          mainColor={MAIN_COLOR_TABLE[index]}
          subColor={SUB_COLOR_TABLE[index]}
          onClick={() => setType(algorithm)}
        >
          <S.HeaderDot color={MAIN_COLOR_TABLE[index]} />
          {algorithm}
        </S.HeaderItem>
      ))}
    </S.Container>
  );
}

export default TopNav;
