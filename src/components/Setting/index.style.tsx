import styled from "styled-components";
import { ReactComponent as XIcon } from "assets/svg/x.svg";
import { ReactComponent as ReplaySVG } from "assets/svg/replay.svg";
import { ReactComponent as PlaySVG } from "assets/svg/play.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Heading = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`;

export const Scheduler = styled.div`
  background-color: white;
  border-radius: 0 8px 8px 8px;
  height: 300px;

  display: flex;
  margin-bottom: 15px;
`;

export const CoreContainer = styled.div`
  display: flex;
  padding: 15px 25px;
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
  border-radius: ${({ selected }) => (selected ? "10px 0 0 0" : "10px 0 0px 10px;")};
  color: #ffffff;
  cursor: pointer;
`;

export const AddCoreContainer = styled.div`
  background-color: #030e42;
  height: 100%;
  box-sizing: border-box;
  width: 272px;
  border-radius: 0 10px 10px 10px;
  padding: 15px 10px 15px 20px;
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
  width: 42px;
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
  right: -30px;
  top: 15px;
  cursor: pointer;
`;

export const AddCoreBtn = styled.div`
  width: 100%;
  height: 54px;
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

  background-color: ${({ selected, subColor }) => (selected ? subColor : "white")};
  color: ${({ selected, mainColor }) => (selected ? mainColor : "black;")};
  box-shadow: ${({ selected }) => selected && "3px 3px 4px rgba(0, 0, 0, 0.25);"};
  transition: 0.7s;

  em {
    font-weight: 500;
    font-style: normal;
  }
`;

export const AddProcessContainer = styled.div`
  background-color: #030e42;
  height: 100%;
  box-sizing: border-box;
  width: 272px;
  border-radius: 0 10px 10px 10px;
  padding: 15px 10px 15px 20px;
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
  width: 200px;
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CoreInnerItem = styled.div<{ color: string }>`
  height: 100px;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  padding: 3px;
  display: flex;
`;

export const ProcessName = styled.div<{ color: string }>`
  width: 45px;
  height: 100%;
  background-color: ${({ color }) => color};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProcessInputContainer = styled.div<{ color: string }>`
  width: 148px;
  padding: 4px;
  background-color: ${({ color }) => color};
  border-radius: 0 7px 7px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const ProcessInput = styled.div`
  width: 127px;
  height: 40px;
  background-color: white;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: grid;
  align-items: center;
  grid-template-columns: 42px 1fr;
  padding-left: 3px;
  justify-items: center;
`;

export const ProcessTypeName = styled.div<{
  mainColor: string;
  subColor: string;
}>`
  width: 42px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  color: ${({ mainColor }) => mainColor};
  background-color: ${({ subColor }) => subColor};
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

export const ProcessTimeInput = styled.input`
  width: 60px;
  justify-content: center;
  padding: 0;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  border: none;
  outline: none;
`;

export const RemoveProcessBtn = styled(XIcon)`
  position: absolute;
  right: -35px;
  top: 35px;
  cursor: pointer;
`;

export const OverviewContainer = styled.div`
  margin-left: 34px;
  background: #030e42;
  border-radius: 8px;
  height: 100%;
  width: 260px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OverviewTitle = styled.div`
  padding-left: 10px;
  font-weight: 800;
  font-size: 14px;
  height: 24px;
  display: flex;
  align-items: center;
  background: #2c2a75;
  border-radius: 3px;
  color: #ffffff;
  margin-bottom: 9px;
`;

export const OverviewProcessTitle = styled(OverviewTitle)`
  margin-bottom: 0;
`;

export const CoreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 9px;
`;

export const OverviewCore = styled.div<{ mainColor: string; subColor: string }>`
  width: 99px;
  height: 34px;
  background: ${({ subColor }) => subColor};
  color: ${({ mainColor }) => mainColor};
  border: 3px solid ${({ mainColor }) => mainColor};
  border-radius: 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: 13px;
  overflow: hidden;
`;

export const OverviewCoreName = styled.div<{ mainColor: string }>`
  width: 31px;
  height: 100%;
  background: ${({ mainColor }) => mainColor};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverviewCoreType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProcessList = styled.div<{ isOsim?: boolean }>`
  display: grid;
  grid-template-columns: ${({ isOsim }) => (isOsim ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr")};
  gap: 5px 4px;
`;

export const OverviewProcessName = styled.div<{ color: string }>`
  width: 100%;
  height: 18px;
  background: ${({ color }) => color};
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
`;

export const OverviewProcessTime = styled.input`
  width: 100%;
  height: 18px;
  background: #ffffff;
  color: #000000;
  border-radius: 3px;
  border: none;
  outline: none;
  text-align: center;
  padding: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const OverviewProcessListHeader = styled.div<{ isOsim?: boolean }>`
  position: sticky;
  top: -10px;
  display: grid;
  grid-template-columns: ${({ isOsim }) => (isOsim ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr")};
  gap: 4px;
  background-color: #030e42;
  padding: 9px 0 5px;
`;

export const StartContainer = styled.div`
  background-color: #030e42;
  height: 100%;
  box-sizing: border-box;
  width: 410px;
  padding: 24px 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  gap: 15px;
`;

export const VideoContainer = styled.div`
  width: 370px;
  padding-top: 20px;
  box-sizing: border-box;
  height: 144px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const CatVideo = styled.video`
  width: 370px;
  height: auto;
  border-radius: 10px;
`;

export const LogoContainer = styled.div`
  position: relative;
  margin-left: 20px;
  width: 320px;
  height: 100%;
`;

export const Logo = styled.img`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 290px;
  height: 193px;
`;

export const Koreatech = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 157px;
  height: 36px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const TimeQuantumContainer = styled.div`
  width: 145px;
  height: 100%;
  border-radius: 10px;
  display: grid;
  overflow: hidden;
  grid-template-columns: auto 1fr;
`;

export const TimeQuantumName = styled.div`
  width: 60px;
  height: 100%;
  background-color: #af3e95;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TimeQuantumInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 23px;
  padding: 0 5px 0 10px;
  box-sizing: border-box;

  &:disabled {
    background-color: #a3a3a3;
  }
`;

export const Replay = styled(ReplaySVG)`
  cursor: pointer;
`;

export const Play = styled(PlaySVG)`
  cursor: pointer;
`;
