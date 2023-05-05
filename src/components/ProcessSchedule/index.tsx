import Tabs from "components/Tabs";
import * as S from "./index.style";
import { useState } from "react";

function ProcessSchedule() {
  const tabs = ["Process Schedule"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <S.Container>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <S.Scheduler>gd</S.Scheduler>
    </S.Container>
  );
}

export default ProcessSchedule;
