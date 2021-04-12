import * as React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";
import { addTask, moveList } from "./state/actions";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { DragItem } from "./DragItem";

type ColumnProps = {
  id: string;
  text: string;
};

// type ColumnProps = React.PropsWithChildren<{ text: string }>;

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const { drag } = useItemDrag({ id, text, type: "COLUMN" });
  const ref = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(draggedItem: DragItem) {
      if (!draggedItem) return;

      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;

        dispatch(moveList(draggedItem.id, id));
      }
    },
  });
  drag(ref);
  drop(ref);

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        dark={true}
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
      />
    </ColumnContainer>
  );
};
