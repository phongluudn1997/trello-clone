import * as React from "react";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";

export const App: React.FC = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column id={list.id} text={list.text} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      />
    </AppContainer>
  );
};
