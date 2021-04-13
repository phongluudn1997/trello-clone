import * as React from "react";
import { CardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { useDrop } from "react-dnd";
import { moveTask } from "./state/actions";

type CardProps = {
  text: string;
  columnId: string;
  id: string;
  isPreview?: boolean;
};

export const Card = ({ text, columnId, id, isPreview }: CardProps) => {
  const { dispatch, draggedItem } = useAppState();
  const { drag } = useItemDrag({ columnId, text, type: "CARD", id });
  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      if (!draggedItem) return;
      if (draggedItem.type !== "CARD") return;
      if (draggedItem.id === id) return;

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
    },
  });

  const ref = React.useRef<HTMLDivElement>(null);
  drag(drop(ref));

  return (
    <CardContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
    >
      {text}
    </CardContainer>
  );
};
