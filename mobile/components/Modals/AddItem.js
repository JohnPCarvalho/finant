import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import Container from './GlobalStyle';
import { 
    Modal,
    TitleView,
    Title,
    ModalBody,
    LabelText,
    ModalInput,
    ModalFooter
} from 'react-native';

export default function addNewItem( props ) {
    return (
    <View>
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
                    <ModalInput />
                    <LabelText> Valor: </LabelText>
                    <ModalInput />
                    <LabelText> Tipo: </LabelText>
                    <ModalInput />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Container>
        </Modal>
    </View>
    )
}

addNewItem.propTypes = {
    visibility: PropTypes.bool,
    title: PropTypes.string
}