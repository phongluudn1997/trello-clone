import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #3179ba;
  height: 100%;
  width: 100%;
  padding: 2rem;
  font-size: 1.6rem;
`;

export const ColumnContainer = styled.div`
  flex: 0 0 30rem;
  padding: 8px;
  border-radius: 3px;
  background-color: #ebecf0;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  min-height: 4rem;
`;

export const ColumnTitle = styled.div`
  padding: 0.6rem 1.6rem 1.2rem;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: white;
  cursor: pointer;
  padding: 0.8rem 1rem;
  border-radius: 3px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  max-width: 30rem;
  word-break: break-word;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;
