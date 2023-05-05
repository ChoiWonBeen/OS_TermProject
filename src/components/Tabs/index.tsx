import * as S from "./index.style";

interface Props {
  tabs: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

function Tabs({ tabs, activeTab, setActiveTab }: Props) {
  return (
    <S.Container>
      {tabs.map((tab, index) => (
        <S.Tab
          key={index}
          isSelected={activeTab === index}
          onClick={() => setActiveTab(index)}
        >
          {tabs[index]}
        </S.Tab>
      ))}
    </S.Container>
  );
}

export default Tabs;
