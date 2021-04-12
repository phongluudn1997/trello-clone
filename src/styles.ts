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

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  flex: 0 0 30rem;
  max-width: 300px;
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

export const CardContainer = styled(DragPreviewContainer)`
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
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.8rem;
`;

export const CustomDragLayerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  pointer-events: none;
`;

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;
