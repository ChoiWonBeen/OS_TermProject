import { useProcessStore } from "store/setting";
import * as S from "../index.style";
import { MAIN_COLOR_TABLE, SUB_COLOR_TABLE } from "static/color";
import { useSchedulerStore } from "store/scheduler";

function AddProcess() {
  const { processes, lastId, addProcess, removeProcess, changeProcessTime } = useProcessStore();
  const algorithm = useSchedulerStore((state) => state.scheduler.algorithm);
  return (
    <S.AddProcessContainer>
      <S.ProcessItemSlider>
        {processes.map((process, index) => (
          <S.ProcessItem key={process.id}>
            <S.CoreInnerItem color={process.mainColor}>
              <S.ProcessName color={process.mainColor}>{process.name}</S.ProcessName>
              <S.ProcessInputContainer color={process.subColor}>
                <S.RemoveProcessBtn onClick={() => removeProcess(index)} />
                <S.ProcessInput>
                  <S.ProcessTypeName mainColor={process.mainColor} subColor={process.subColor}>
                    AT
                  </S.ProcessTypeName>
                  <S.ProcessTimeInput
                    type="number"
                    min="0"
                    value={process.arrivalTime}
                    onChange={(e) => changeProcessTime(index, Number(e.target.value), true)}
                  />
                </S.ProcessInput>
                <S.ProcessInput>
                  <S.ProcessTypeName mainColor={process.mainColor} subColor={process.subColor}>
                    BT
                  </S.ProcessTypeName>
                  <S.ProcessTimeInput
                    type="number"
                    min="0"
                    value={process.burstTime}
                    onChange={(e) => changeProcessTime(index, Number(e.target.value), false)}
                  />
                </S.ProcessInput>
                {(algorithm === "OSim" || algorithm === "VSRR") && (
                  <S.ProcessInput>
                    <S.ProcessTypeName mainColor={process.mainColor} subColor={process.subColor}>
                      LV
                    </S.ProcessTypeName>
                    <S.ProcessTimeInput
                      type="number"
                      min="0"
                      value={process?.level}
                      onChange={(e) => changeProcessTime(index, Number(e.target.value), false, true)}
                    />
                  </S.ProcessInput>
                )}
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
                burstTime: 0,
                level: 1,
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
