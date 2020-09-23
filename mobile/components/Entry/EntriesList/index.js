import React from "react";
import PropTypes from "prop-types";

import { RowText, ListRow } from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function EntryRow(props) {
  return (
    <TouchableHighlight
      style={{ borderRadius: 10 }}
      activeOpacity={0.6}
      underlayColor="#424242"
      onPress={() =>
        alert("Nome: " + props.valueName + "\n" + "Valor: " + props.moneyValue)
      }
    >
      <ListRow>
        <RowText> {props.valueName}</RowText>
        <RowText value={props.moneyValue}> R$ {props.moneyValue}</RowText>
      </ListRow>
    </TouchableHighlight>
  );
}

EntryRow.propTypes = {
  valueName: PropTypes.string,
  moneyValue: PropTypes.string,
};
