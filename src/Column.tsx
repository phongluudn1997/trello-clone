import * as React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";

type ColumnProps = {
  id: string;
  text: string;
};

// type ColumnProps = React.PropsWithChildren<{ text: string }>;

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={(text) => console.log(text)}
      />
    </ColumnContainer>
  );
};
