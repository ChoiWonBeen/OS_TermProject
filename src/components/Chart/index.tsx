import Tabs from "components/Tabs";
import * as S from "./index.style";
import { useState } from "react";
import ProcessChart from "components/ProcessChart";
import ProcessorChart from "components/ProcessorChart";

function Chart() {
  const tabs = ["Process Gantt Chart", "Processor Gantt Chart"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <S.Container>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <ProcessChart />}
      {activeTab === 1 && <ProcessorChart />}
    </S.Container>
  );
}

export default Chart;
