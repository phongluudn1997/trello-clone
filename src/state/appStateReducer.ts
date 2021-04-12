import { Action } from "./actions";
import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({ id: nanoid(), text: action.payload, tasks: [] });
      break;
    }
    case "ADD_TASK": {
      const { listId, text } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text: text,
      });
      break;
    }
    case "MOVE_LIST": {
      const { draggerId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggerId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
    case "MOVE_TASK": {
      const {
        draggedItemId,
        sourceColumnId,
        hoverItemId,
        targetColumnId,
      } = action.payload;

      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(draft.lists, targetColumnId);

      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      );
      const hoverIndex = hoverItemId
        ? findItemIndexById(draft.lists[targetListIndex].tasks, hoverItemId)
        : 0;

      const item = draft.lists[sourceListIndex].tasks[dragIndex];

      draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);
      draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);

      break;
    }
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload;
      break;
    }
    default: {
      break;
    }
  }
};
