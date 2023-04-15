import TopNav from "./components/TopNav";
import * as S from "./App.style";
import ProcessSchedule from "./components/ProcessSchedule";
import Gantt from "./components/Gantt";
import Setting from "./components/Setting";

function App() {
  return (
    <>
      <TopNav />
      <S.Container>
        <ProcessSchedule />
        <Gantt />
        <Setting />
      </S.Container>
    </>
  );
}

export default App;
