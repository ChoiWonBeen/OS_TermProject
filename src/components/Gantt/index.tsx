import { useState } from "react";
import * as S from "./index.style";
import Tabs from "components/Tabs";

function Gantt() {
  const tabs = ["Scheduling Gantt Chart"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <S.Container>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <S.Scheduler>gd</S.Scheduler>
    </S.Container>
  );
}

export default Gantt;
