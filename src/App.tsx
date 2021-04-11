import * as React from "react";
import {
  AppContainer,
  ColumnContainer,
  CardContainer,
  ColumnTitle,
} from "./styles";

export const App: React.FC = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Column Title</ColumnTitle>
        <CardContainer>Task 1</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
};
