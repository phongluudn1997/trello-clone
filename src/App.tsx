import * as React from "react";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from "./styles";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      />
    </AppContainer>
  );
};
