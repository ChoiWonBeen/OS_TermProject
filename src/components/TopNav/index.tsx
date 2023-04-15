import * as S from "./index.style";
const HEADER_LIST = [
  { algoritm_name: "FCFS", color: "#18E806" },
  { algoritm_name: "RR", color: "#FF5B52" },
  { algoritm_name: "SPN", color: "#E8D106" },
  { algoritm_name: "SRTN", color: "#7875FF" },
  { algoritm_name: "HRRN", color: "#0697E8" },
  { algoritm_name: "OSim", color: "#E88006" },
];

function TopNav() {
  return (
    <S.Container>
      {HEADER_LIST.map((item, index) => (
        <S.HeaderItem key={index}>
          <S.HeaderDot color={item.color} />
          {item.algoritm_name}
        </S.HeaderItem>
      ))}
    </S.Container>
  );
}

export default TopNav;
