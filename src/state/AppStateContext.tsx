import * as React from "react";
import { AppState, List, Task, appStateReducer } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import { DragItem } from "../DragItem";
import { withInitialState } from "../withInitialState";
import { save } from "../api";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
};

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: React.Dispatch<Action>;
  draggedItem: DragItem | null;
};

const AppStateContext = React.createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    const { lists, draggedItem } = state;

    React.useEffect(() => {
      save(state);
    }, [state]);

    return (
      <AppStateContext.Provider
        value={{
          lists,
          getTasksByListId: (id) => {
            return lists.find((list) => list.id === id)?.tasks || [];
          },
          dispatch,
          draggedItem,
        }}
      >
        {children}
      </AppStateContext.Provider>
    );
  }
);

export const useAppState = () => {
  return React.useContext(AppStateContext);
};
