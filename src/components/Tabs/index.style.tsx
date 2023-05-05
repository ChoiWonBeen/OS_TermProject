import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Tab = styled.div<{ isSelected: boolean }>`
  padding: 5px 16px 2px;
  background-color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#F1F1FA")};
  color: ${({ isSelected }) => (isSelected ? "#201DBB" : "#9D9BB7")};
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;
