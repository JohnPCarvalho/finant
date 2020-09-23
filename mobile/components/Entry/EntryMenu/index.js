import React from "react";

import { MenuRow, MenuText, AddButton, ButtonText } from "./styles";

export default function EntryMenu(props) {
  return (
    <MenuRow>
      <MenuText>Entradas/Gastos</MenuText>
      <AddButton onPress={props.addItem}>
        <ButtonText>+</ButtonText>
      </AddButton>
    </MenuRow>
  );
}
