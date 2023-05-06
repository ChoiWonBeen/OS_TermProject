import { useProcessStore, useProcessorStore } from "store/setting";
import * as S from "./index.style";
import { useSchedulerStore } from "store/scheduler";

/*
  number | null[] 형태의 배열인 processAllocation을 받아서  
  각 값이 연속되었을 때, 해당 값과 연속된 횟수의 배열로 만들어 반환하는 함수
  ex) [1, 1, null, null, null, 3, 3, 3] => [[1, 2], [null, 3], [3, 3]]
*/
function getContinuousArray(processAllocation: (number | null)[]): [number | null, number][] {
  const result: [number | null, number][] = [];
  let count = 1;
  let prev = processAllocation[0];

  for (let i = 1; i < processAllocation.length; i++) {
    if (prev === processAllocation[i]) {
      count++;
    } else {
      result.push([prev, count]);
      prev = processAllocation[i];
      count = 1;
    }
  }

  result.push([prev, count]);

  return result;
}

function GanttChart() {
  const processes = useProcessStore((state) => state.processes);
  const processors = useProcessorStore((state) => state.processors);
  const result = useSchedulerStore((state) => state.schedulerResult);

  return (
    <S.Container>
      <S.TableContainer>
        <S.Table>
          <S.TableContents>
            <S.Left>
              <S.TableSubject />
              <S.TableItemNames>
                {processes.map((process) => (
                  <S.TableItemName key={process.id} mainColor={process.mainColor}>
                    {process.name}
                  </S.TableItemName>
                ))}
              </S.TableItemNames>
            </S.Left>
          </S.TableContents>
        </S.Table>
        <div>
          <S.TableHeader>
            {[...Array(Math.max(result?.totalTime ? result?.totalTime + 2 : 0, 20))].map((_, index) => (
              <S.TableHeaderTime key={index}>{index}</S.TableHeaderTime>
            ))}
          </S.TableHeader>
          <S.DataTable>
            <S.HiddenBox
              time={Math.max(result?.totalTime ? result?.totalTime + 2 : 0, 20)}
              isTransitionStart={!!result}
            />
            {result &&
              result.processResultList.map((processResult) => (
                <S.DataRow
                  key={processResult.processId}
                  colCount={Math.max(result?.totalTime ? result?.totalTime + 2 : 0, 20) - 1}
                >
                  {getContinuousArray(processResult.processorAllocation).map(([processorId, count], index) => {
                    if (processorId === null) {
                      return <S.DataBox key={index} mainColor={"none"} subColor={"none"} size={count}></S.DataBox>;
                    }
                    const processor = processors.find((processor) => processor.id === processorId)!;
                    return (
                      <S.DataBox mainColor={processor.mainColor} subColor={processor.subColor} size={count}>
                        {processor.name}
                      </S.DataBox>
                    );
                  })}
                </S.DataRow>
              ))}
          </S.DataTable>
        </div>
      </S.TableContainer>
    </S.Container>
  );
}

export default GanttChart;
