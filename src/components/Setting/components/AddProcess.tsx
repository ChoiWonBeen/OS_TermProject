import { useProcessStore } from "store/setting";
import * as S from "../index.style";
import { MAIN_COLOR_TABLE, SUB_COLOR_TABLE } from "static/color";

function AddProcess() {
  const { processes, lastId, addProcess, changeProcess, removeProcess } =
    useProcessStore();
  return (
    <S.AddProcessContainer>
      <S.ProcessItemSlider>
        {processes.map((process) => (
          <S.ProcessItem key={process.id}>
            <S.CoreInnerItem color={process.mainColor}>
              <S.ProcessName color={process.mainColor}>
                {process.name}
              </S.ProcessName>
              <S.ProcessInputContainer color={process.subColor}>
                <S.ProcessInput>AT</S.ProcessInput>
                <S.ProcessInput>BT</S.ProcessInput>
              </S.ProcessInputContainer>
            </S.CoreInnerItem>
          </S.ProcessItem>
        ))}
        <S.ProcessItem>
          <S.AddProcessItemBtn
            onClick={() =>
              addProcess({
                id: lastId + 1,
                name: `P${lastId + 1}`,
                mainColor: MAIN_COLOR_TABLE[lastId % MAIN_COLOR_TABLE.length],
                subColor: SUB_COLOR_TABLE[lastId % SUB_COLOR_TABLE.length],
                arrivalTime: 0,
                leftWork: 0,
                workAmount: 0,
              })
            }
          >
            +
          </S.AddProcessItemBtn>
        </S.ProcessItem>
      </S.ProcessItemSlider>
    </S.AddProcessContainer>
  );
}

export default AddProcess;
