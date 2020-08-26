import React from 'react';
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';

import { ListContainer, ListRow } from './styles';
 
export default function EntriesList ( props ) {
    return (
        <ListContainer>
            <Text>{props.valueName}</Text>
            <Text value={props.moneyValue}> {props.moneyValue}</Text>
        </ListContainer>
    )
} 

EntriesList.propTypes = {
    valueName: PropTypes.string,
    moneyValue: PropTypes.number
}