import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  font-size: 20px;
  padding: 8px 0 12px;
`;

export const HeaderItem = styled.div<{
  selected: boolean;
  mainColor: string;
  subColor: string;
}>`
  display: flex;
  align-items: center;
  padding-left: 12px;
  gap: 14px;
  width: 140px;
  height: 40px;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  cursor: pointer;
  font-size: 26px;
  font-weight: 700;
  color: ${({ selected, mainColor }) => (selected ? mainColor : "black")};
  background-color: ${({ selected, subColor }) =>
    selected ? subColor : "#EEEEEE"};
`;

export const HeaderDot = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
