import React, { useState } from 'react'; 
import { View, Text } from 'react-native';

import EntriesList from '../Entry/EntriesList/index';

import { 
    Container, 
    AppHeader,
    Balance,
    AboutBalance
} from './styles';

import {
    LogoTitle
} from '../Login/styles';

export default function Home ( props ) {

    const [balance, setBalance] = useState(15.40); 
    const [currency, setCurrency] = useState("R$");

    return(
        <Container>
            <AppHeader>
                <LogoTitle>Finant</LogoTitle>
                <AboutBalance>Voce tem:</AboutBalance>
                <View>
                    <Balance>{currency}: {balance}</Balance> 
                </View>
                <EntriesList valueName="Lanche" moneyValue={10.00}/>
                
            </AppHeader>
        </Container>
    )
}
