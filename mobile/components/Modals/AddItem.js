import React from "react";
import PropTypes from "prop-types";
import { RadioButton } from "react-native-paper";

import { Modal } from "react-native";

import {
  Container,
  TitleView,
  Title,
  ModalBody,
  LabelText,
  ModalInput,
  ModalFooter,
  ModalButton,
  TextButton,
  RadioView,
} from "./GlobalStyle";

export default function addNewItem(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visibility}
      onRequestClose={props.backButtonAction}
    >
      <Container>
        <TitleView>
          <Title> {props.title} </Title>
        </TitleView>
        <ModalBody>
          <LabelText> Nome: </LabelText>
          <ModalInput
            autoCapitalize="none"
            autoCorrect={true}
            placeholder="Nome do valor"
            onChangeText={props.updateModalValueName}
            value={props.valueName}
          />
          <LabelText> Valor: </LabelText>
          <ModalInput
            placeholder="R$"
            keyboardType="numeric"
            onChangeText={props.updateModalMoneyValue}
            value={props.moneyValue}
          />
          <LabelText> Tipo: </LabelText>
          <RadioView>
            <RadioButton
              value={props.despesa}
              status={props.checkedDespesa}
              onPress={props.selectDespesa}
            />
            <LabelText>Despesa</LabelText>
          </RadioView>
          <RadioView>
            <RadioButton
              value={props.entrada}
              status={props.checkedEntrada}
              onPress={props.selectEntrada}
            />
            <LabelText>Entrada</LabelText>
          </RadioView>
        </ModalBody>
        <ModalFooter>
          <ModalButton onPress={props.addItem}>
            <TextButton>ADICIONAR</TextButton>
          </ModalButton>
        </ModalFooter>
      </Container>
    </Modal>
  );
}

addNewItem.propTypes = {
  visibility: PropTypes.bool,
  title: PropTypes.string,
  backButtonAction: PropTypes.func,
  addItem: PropTypes.func,
  valueName: PropTypes.string,
  moneyValue: PropTypes.string,
};
