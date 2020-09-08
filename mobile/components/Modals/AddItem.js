import React from 'react';
import PropTypes from 'prop-types';

import { Text, Modal, View, StyleSheet, TouchableHighlight, Alert  } from 'react-native';

import {
    Container, 
    TitleView,
    Title,
    ModalBody,
    LabelText,
    ModalInput,
    ModalFooter,
    ModalButton,
    TextButton
    } from './GlobalStyle';

export default function addNewItem ( props ) {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visibility}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <Container>
                <TitleView>
                    <Title> {props.title} </Title>
                </TitleView>
                <ModalBody>
                    <LabelText> Nome: </LabelText>
                    <ModalInput 
                        placeholder="Nome do valor"
                    />
                    <LabelText> Valor: </LabelText>
                    <ModalInput 
                        placeholder="R$"
                    />
                    <LabelText> Tipo: </LabelText>
                    <ModalInput 
                        placeholder="qualquercoisa"
                    />
                </ModalBody>
                <ModalFooter>
                    <ModalButton onPress={props.close}>
                        <TextButton>ADICIONAR</TextButton>
                    </ModalButton>
                </ModalFooter>
            </Container>
      </Modal>
    );
}

/* const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  }); */


/* export default function addNewItem( props ) {
    return (
        <Modal
            visible={props.visibility}
            transparent={true}
            animationType="slide"
        >
            <Container>
                <TitleView>
                    <Title> {props.title} </Title>
                </TitleView>
                <ModalBody>
                    <LabelText> Nome: </LabelText>
                    <ModalInput 
                        placeholder="Nome do valor"
                    />
                    <LabelText> Valor: </LabelText>
                    <ModalInput 
                        placeholder="R$"
                    />
                    <LabelText> Tipo: </LabelText>
                    <ModalInput 
                        placeholder="qualquercoisa"
                    />
                </ModalBody>
                <ModalFooter>
                    <ModalButton>
                        <TextButton>ADICIONAR</TextButton>
                    </ModalButton>
                </ModalFooter>
            </Container>
        </Modal>
    )
}
 */
addNewItem.propTypes = {
    visibility: PropTypes.bool,
    title: PropTypes.string
}