import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { draggerId: string; hoverId: string } }
  | { type: "SET_DRAGGED_ITEM"; payload: DragItem | null }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoverItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    };

export const addList = (title: string): Action => ({
  type: "ADD_LIST",
  payload: title,
});

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const moveList = (draggerId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggerId,
    hoverId,
  },
});

export const moveTask = (
  draggedItemId: string,
  hoverItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => ({
  type: "MOVE_TASK",
  payload: {
    draggedItemId,
    hoverItemId,
    sourceColumnId,
    targetColumnId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});
