import styled from "styled-components";
import { ReactComponent as XIcon } from "assets/svg/x.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Heading = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`;

export const Scheduler = styled.div`
  background-color: white;
  border-radius: 8px;
  height: 300px;

  display: flex;
`;

export const CoreContainer = styled.div`
  display: flex;
  padding: 10px 15px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 127px;
  font-weight: 700;
  font-size: 20px;
  height: 40px;
  background-color: ${({ selected }) => (selected ? "#2C2A75" : "#8B8AAE")};
  border-radius: ${({ selected }) =>
    selected ? "10px 0 0 0" : "10px 0 0px 10px;"};
  color: #ffffff;
  cursor: pointer;
`;

export const AddCoreContainer = styled.div`
  background-color: #030e42;
  height: calc(100% - 20px);
  width: 260px;
  border-radius: 0 10px 10px 10px;
  padding: 9px 10px 9px 20px;
`;

export const CoreItemSlider = styled.div`
  overflow: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CoreItem = styled.div<{ color: string }>`
  height: 60px;
  width: 210px;
  background: #ffffff;
  border-radius: 10px;
  border: 3px solid ${({ color }) => color};
  box-sizing: border-box;
`;

export const CoreWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CoreName = styled.div<{ color: string }>`
  width: 50px;
  height: 100%;
  background-color: ${({ color }) => color};
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveCoreBtn = styled(XIcon)`
  position: absolute;
  right: -40px;
  top: 15px;
  cursor: pointer;
`;

export const AddCoreBtn = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  gap: 10px;
  height: 54px;
`;

export const CoreButton = styled.div<{
  selected: boolean;
  mainColor: string;
  subColor: string;
}>`
  width: 66px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;

  background-color: ${({ selected, subColor }) =>
    selected ? subColor : "white"};
  color: ${({ selected, mainColor }) => (selected ? mainColor : "black;")};
  box-shadow: ${({ selected }) =>
    selected && "3px 3px 4px rgba(0, 0, 0, 0.25);"};
  transition: 0.7s;
`;

export const AddProcessContainer = styled.div`
  background-color: #030e42;
  height: calc(100% - 40px);
  width: 221px;
  border-radius: 0 10px 10px 10px;
  padding: 20px 24px;
`;

export const NavChildrenContainer = styled.div`
  background-color: #030e42;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-start;
  gap: 4px;
  padding: 6px 0;
  color: white;
  border-radius: 0 0 0 10px;
  max-height: 150px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavChildren = styled.div<{ color: string }>`
  width: 66px;
  height: 20px;
  font-size: 12px;
  border-radius: 10px 0 0px 10px;
  background-color: ${({ color }) => color};
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ProcessItem = styled.div`
  width: 180px;
  height: 100px;
  background: #ffffff;
  border-radius: 10px;
`;

export const AddProcessItemBtn = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 36px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProcessItemSlider = styled.div`
  overflow: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CoreInnerItem = styled.div<{ color: string }>`
  height: 100px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
`;
