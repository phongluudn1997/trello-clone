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

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  padding: 1rem 1.2rem;
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 85ms ease-in;
  display: block;
  width: 100%;
  max-width: 30rem;
  color: ${(props) => (props.dark ? "black" : "white")}

  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 0.6rem 1.2rem;
  background-color: #5aac44;
  color: white;
  text-align: center;
`;

export const NewItemInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.6rem;
  border: none;
  font-family: inherit;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.8rem;
`;
