import { useDrag } from "react-dnd";
import { DragItem } from "../DragItem";
import { setDraggedItem } from "../state/actions";
import { useAppState } from "../state/AppStateContext";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  return { drag };
};
