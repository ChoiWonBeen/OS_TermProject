import { useCoreStore, useProcessorStore } from "store/setting";
import * as S from "../index.style";
import { MAIN_COLOR_TABLE, SUB_COLOR_TABLE } from "static/color";

function AddCore() {
  const {
    processors,
    addProcessor,
    lastId,
    removeProcessor,
    changeProcessorCore,
  } = useProcessorStore();
  const ECore = useCoreStore((state) => state.ECore);
  const PCore = useCoreStore((state) => state.PCore);

  return (
    <S.AddCoreContainer>
      <S.CoreItemSlider>
        {processors.map((processor, index) => (
          <S.CoreItem key={processor.id} color={processor.mainColor}>
            <S.CoreWrapper>
              <S.CoreName color={processor.mainColor}>
                {processor.name}
              </S.CoreName>
              <S.RemoveCoreBtn onClick={() => removeProcessor(index)} />
              <S.RadioContainer>
                <S.CoreButton
                  selected={processor.core.name === "E"}
                  mainColor={processor.mainColor}
                  subColor={processor.subColor}
                  onClick={() => changeProcessorCore(index, ECore)}
                >
                  <em>E</em>core
                </S.CoreButton>
                <S.CoreButton
                  selected={processor.core.name === "P"}
                  mainColor={processor.mainColor}
                  subColor={processor.subColor}
                  onClick={() => changeProcessorCore(index, PCore)}
                >
                  <em>P</em>core
                </S.CoreButton>
              </S.RadioContainer>
            </S.CoreWrapper>
          </S.CoreItem>
        ))}
        <S.CoreItem color="#ffffff">
          <S.AddCoreBtn
            onClick={() =>
              addProcessor({
                core: ECore,
                id: lastId + 1,
                name: `C${lastId + 1}`,
                currentProcess: null,
                lastOffTime: -1,
                mainColor: MAIN_COLOR_TABLE[lastId % MAIN_COLOR_TABLE.length],
                subColor: SUB_COLOR_TABLE[lastId % SUB_COLOR_TABLE.length],
              })
            }
          >
            +
          </S.AddCoreBtn>
        </S.CoreItem>
      </S.CoreItemSlider>
    </S.AddCoreContainer>
  );
}

export default AddCore;
