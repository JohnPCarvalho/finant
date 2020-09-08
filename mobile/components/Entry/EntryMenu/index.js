import React from 'react';

import { Text } from 'react-native';

import {
    MenuRow,
    MenuText,
    AddButton,
    ButtonText
} from './styles';

export default function EntryMenu( props ) {
    return (
        <MenuRow>
            <MenuText>Incomes/Outgoings</MenuText>
            <AddButton onPress={props.addItem}><ButtonText>+</ButtonText></AddButton>
        </MenuRow>
    )
}