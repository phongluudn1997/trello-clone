import * as React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

// type ColumnProps = React.PropsWithChildren<{ text: string }>;

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={(text) => console.log(text)}
      />
    </ColumnContainer>
  );
};
