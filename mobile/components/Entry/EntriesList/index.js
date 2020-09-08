import React from 'react';
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';

import { ListContainer, RowText, ListRow } from './styles';
 
export default function EntryRow ( props ) {
    return (
            <ListRow>
                <RowText>Nome: {props.valueName}</RowText>
                <RowText value={props.moneyValue}> R$ {props.moneyValue}</RowText>
            </ListRow>
    )
} 

EntryRow.propTypes = {
    valueName: PropTypes.string,
    moneyValue: PropTypes.string,
}