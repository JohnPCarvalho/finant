import React, { useState } from 'react'; 

import EntryRow from '../Entry/EntriesList/index';

import { 
    AppHeader,
    LogoTitle,
    Balance,
    AboutBalance,
    ListView,
    List
} from './styles';

import {
    Container
} from '../Login/styles';
import { ListContainer } from '../Entry/EntriesList/styles';
import { ScrollView, FlatList } from 'react-native-gesture-handler';


export default function Home ( props ) {

    //setBalance sera executado sempre que um novo gasto/entrada for inserido a partir do menu *IMPLEMENTAR
    //setCurrency provavelmente sera utilizado por configuracao depois

    const [balance, setBalance] = useState(15.40); 
    const [currency, setCurrency] = useState("R$");
    const [listItems, setListItems] = useState([
        {
            nome: 'Salgarzao',
            valor: 27.00
        },
        {
            nome: 'Salgarzao2',
            valor: 27.00
        },
        {
            nome: 'Salgarzao3',
            valor: 27.00
        },
        {
            nome: 'Salgarzao4',
            valor: 27.00
        },
    ]);


    return(
        <Container>
            <AppHeader>
                <LogoTitle>Finant</LogoTitle>
                <AboutBalance>Voce tem:</AboutBalance>
                <Balance>{currency}: {balance}</Balance> 
            </AppHeader>
            <ListView>
                {/* menu para adicionar entries, ficara "grudado" na list */}
                <List>
                    {/* para cada item de despesa, renderizar um EntryRow */}
                    {/* {listItems.map((item, index) => {
                        return 
                            <EntryRow 
                                valueName={item[index].nome}
                                moneyValue={item[index].valor}
                            />
                    })} */}
                    <EntryRow
                        valueName="Salgazaro"
                        moneyValue={15.70}
                    />
                </List>
            </ListView>
        </Container>
    )
}