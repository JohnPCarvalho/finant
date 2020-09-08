import React, { useState, Fragment, useEffect } from 'react'; 

import EntryRow from '../Entry/EntriesList/index';
import EntryMenu from '../Entry/EntryMenu/index';
import { Text } from 'react-native';

import { 
    AppHeader,
    LogoTitle,
    Balance,
    AboutBalance,
    ListView,
    List
} from './styles';

import AddNewItem from '../Modals/AddItem';

import {
    Container
} from '../Login/styles';
import { ListContainer } from '../Entry/EntriesList/styles';
import { ScrollView, FlatList } from 'react-native-gesture-handler';


export default function Home ( props ) {

    //setBalance sera executado sempre que um novo gasto/entrada for inserido a partir do menu *IMPLEMENTAR
    //setCurrency provavelmente sera utilizado por configuracao depois

    const [modalVisible, setModalVisible] = useState(false);
    const [balance, setBalance] = useState(); 
    const [currency, setCurrency] = useState("R$");
    const [listItems, setListItems] = useState([
        {
            nome: 'Salario',
            valor: 1600.00
        },
        {
            nome: 'McDonalds',
            valor: -20.00
        },
        {
            nome: 'BK',
            valor: -41.30
        },
        {
            nome: 'FODASE',
            valor: -20.00
        },
        {
            nome: 'FODASE',
            valor: -80.00
        }, 
    ]);

    //efeito que ira fazer a soma de todos os itens e atualizara o state do saldo atual
    useEffect(() => {
        async function calculateBalace(list) {
            let sum = 0;
            list.map((listItem, index) => {
                return sum += listItem.valor
            })
            console.log(sum);
            setBalance(sum.toFixed(2));
        }
        calculateBalace(listItems);
    }, [])


    const addListItem = () => {
        console.log("johnny");
        const itemTeste = {
            nome: 'Johnny',
            valor: 10.00
        }
       setListItems(state => [...listItems, itemTeste])
    }

    return(
        <Container>
            <AddNewItem 
                title="Adicionar"
                visibility={modalVisible}
            />
            <AppHeader>
                <LogoTitle>Finant</LogoTitle>
                <AboutBalance>Você tem:</AboutBalance>
                <Balance>{currency}: {balance}</Balance> 
            </AppHeader>
            <ListView>
                <EntryMenu 
                    addItem={() => setModalVisible(true)}
                />
                {/* menu para adicionar entries, ficara "grudado" na list */}
                <List>
                    {
                    listItems.length === 0
                    ? <Text>Nao tem nada :(</Text>
                        : (
                            listItems.map((item, index) => {
                            console.log("lista");
                            console.log(item);
                            return (
                                <EntryRow
                                    moneyValue={item.valor.toFixed(2)}
                                    valueName={item.nome}
                                />
                            )
                        })
                        )
                    } 
                </List>
            </ListView>
        </Container>
    )
}
