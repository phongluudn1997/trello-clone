import * as React from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = React.useState("");
  return (
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
