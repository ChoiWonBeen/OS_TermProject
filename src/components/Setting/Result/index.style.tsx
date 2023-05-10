import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Background = styled.div`
  width: 485px;
  height: 270px;
  background: #030e42;
  border-radius: 8px;
  position: relative;
`;

export const BackgroundRight = styled.div`
  width: 885px;
  height: 270px;
  background: #030e42;
  border-radius: 8px;
  position: relative;
`;

export const Heading = styled.div`
  background: #2c2a75;
  border-radius: 3px;
  margin: 14px 18px 0;
  height: 28px;
  font-weight: 700;
  font-size: 15px;
  color: #dbdbdb;
  display: flex;
  align-items: center;
  padding-left: 18px;
`;

export const ChartWrapper = styled.div`
  width: 260px;
  height: 260px;
  position: absolute;
  top: 25px;
  left: 120px;
`;

export const TotalPower = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #f3f3f3;
  position: absolute;
  top: 137px;
  left: 181px;

  em {
    color: #a0eb00;
    font-style: normal;
  }
`;

export const ScheduleResultContainer = styled.div`
  position: relative;
  overflow-y: scroll;
  height: calc(100% - 84px);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScheduleResult = styled.div`
  padding: 0 18px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 9px 7px;
`;

export const ScheduleResultHeader = styled.div`
  padding: 10px 18px 8px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 9px 7px;
`;

export const ProcessName = styled.div<{ color: string }>`
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

export const ProcessTime = styled.div`
  width: 100%;
  height: 18px;
  background: #ffffff;
  color: #000000;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
