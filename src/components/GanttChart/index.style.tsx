import styled from "styled-components";
import { ReactComponent as TableSubjectSVG } from "assets/svg/tablesubject.svg";

export const Container = styled.div`
  width: 1470px;
  height: 361px;
  left: 480px;
  top: 1574px;

  background: #07103a;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  width: 1434px;
  height: 327px;
  background: #2c2a75;
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableSubject = styled(TableSubjectSVG)`
  position: sticky;
  top: -2px;
  left: 0;
  z-index: 3;
  height: 40px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableContents = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const TableItemNames = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  left: 0;
`;

export const TableItemName = styled.div<{ mainColor: string }>`
  width: 79px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 24px;

  background: ${({ mainColor }) => mainColor};
  border-radius: 10px;
  position: relative;
`;

export const Left = styled.div`
  position: sticky;
  left: 0;
`;

export const TableHeader = styled.div`
  position: sticky;
  top: 0;
  color: #ffffff;
  height: 40px;
  display: flex;
  z-index: 10;
`;

export const TableHeaderTime = styled.div`
  width: 75px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 24px;
  background: #2c2a75;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 37px;
    height: 287px;
    border: 1px black solid;
  }
`;

export const DataTable = styled.div`
  width: 100%;
  background-color: white;
  min-height: calc(100% - 40px);
  padding: 10px 0 10px 37px;
  box-sizing: border-box;
  position: relative;
`;

export const DataRow = styled.div<{ colCount: number }>`
  display: grid;
  grid-template-columns: repeat(${({ colCount }) => colCount}, 1fr);
  padding: 5px 37px 5px 0;
  height: 54px;
  box-sizing: border-box;
`;

export const DataBox = styled.div<{ mainColor: string; subColor: string; size: number }>`
  grid-column: span ${({ size }) => size};
  background-color: ${({ mainColor }) => mainColor};
  color: ${({ subColor }) => subColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
`;

export const HiddenBox = styled.div<{ time: number; isTransitionStart: boolean }>`
  width: ${({ isTransitionStart }) => (isTransitionStart ? 0 : 100)}%;
  z-index: 2;
  background-color: white;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  transition: width ${({ time, isTransitionStart }) => (!isTransitionStart ? 0 : time)}s linear;
`;
