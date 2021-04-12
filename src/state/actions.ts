import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { draggerId: string; hoverId: string } }
  | { type: "SET_DRAGGED_ITEM"; payload: DragItem | null };

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

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});
