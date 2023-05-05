import * as S from "./index.style";
import { useState } from "react";
import Tabs from "components/Tabs";
import ProcessCore from "./components/ProcessCore";

function Setting() {
  const tabs = ["Process & Core", "Result"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <S.Container>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <S.Scheduler>{activeTab === 0 && <ProcessCore />}</S.Scheduler>
    </S.Container>
  );
}

export default Setting;
