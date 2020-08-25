import React, { useState } from 'react'; 
import { View, Text } from 'react-native';

import EntriesList from '../Entry/EntriesList/index';

import { 
    Container, 
    LogoTitle,
    AppHeader,
    Balance,
    AboutBalance
} from './styles';

export default function Home ( props ) {

    const [balance, setBalance] = useState(15.40); 
    const [currency, setCurrency] = useState("R$");

    return(
        <Container>
            <AppHeader>
                <LogoTitle>Finant</LogoTitle>
                <AboutBalance>Voce tem:</AboutBalance>
                <View>
                    <Text>{currency}: {balance}</Text> 
                </View>
                
                
            </AppHeader>
        </Container>
    )
}

/* 

 */