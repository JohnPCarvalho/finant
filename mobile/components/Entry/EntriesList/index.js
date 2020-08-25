import React from 'react';
import { View, Text } from 'react-native'

import { ListContainer, ListRow } from './styles';
 
export default function EntriesList ( props ) {
    return (
        <ListContainer>
            <ListContainer>
                <Text>Gasto 1</Text>
                <Text>40,00</Text>
            </ListContainer>
        </ListContainer>
    )
} 