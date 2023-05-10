import TopNav from "./components/TopNav";
import * as S from "./App.style";
import Setting from "./components/Setting";
import Chart from "components/Chart";
import { useSchedulerStore } from "store/scheduler";

function App() {
  const { studyNiceValue, changeStudyNiceValue, memoryNiceValue, changeMemoryNiceValue } = useSchedulerStore();
  return (
    <>
      <TopNav />
      <S.Container>
        <Chart />
        <Setting />
        <S.Temp>
          StudyNiceValue
          <input type="number" value={studyNiceValue} onChange={(e) => changeStudyNiceValue(Number(e.target.value))} />
          MemoryNiceValue
          <input
            type="number"
            value={memoryNiceValue}
            onChange={(e) => changeMemoryNiceValue(Number(e.target.value))}
          />
        </S.Temp>
      </S.Container>
    </>
  );
}

export default App;
