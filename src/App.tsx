import TopNav from "./components/TopNav";
import * as S from "./App.style";
import Setting from "./components/Setting";
import Chart from "components/Chart";

function App() {
  return (
    <>
      <TopNav />
      <S.Container>
        <Chart />
        <Setting />
      </S.Container>
    </>
  );
}

export default App;
