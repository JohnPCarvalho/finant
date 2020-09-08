import React, { useState, useEffect } from 'react'; 

import EntryRow from '../Entry/EntriesList/index';
import EntryMenu from '../Entry/EntryMenu/index';
import { Text, Modal, View, StyleSheet, TouchableHighlight } from 'react-native';

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


export default function Home ( props ) {

    //setBalance sera executado sempre que um novo gasto/entrada for inserido a partir do menu *IMPLEMENTAR
    //setCurrency provavelmente sera utilizado por configuracao depois

    const [modalVisible, setModalVisible] = useState(false);
    const [balance, setBalance] = useState(); 
    const [currency, setCurrency] = useState("R$");
    const [listItems, setListItems] = useState([
        {
            nome: 'Salario',
            valor: 1650.00
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
    }, [balance])

    const changeModalVisibility = ( modalState ) => {
        setModalVisible(!modalState);
    }

    const showDetails = ( name, value ) => {
        console.log(name + " " + value);
    }

    const addListItem = ( name, value ) => {
        console.log("johnny");
        const itemTeste = {
            nome: 'Johnny',
            valor: 10.00
        }
       setListItems(state => [...listItems, itemTeste])
    }

    return(
        <Container>

            {/* modal fica aqui */}
            <AddNewItem 
                visibility={modalVisible}
                close={changeModalVisibility}
                title="Adicionar item"
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
                                    //openModal={showDetails(item.nome, item.valor)}
                                    key={item.nome+item.valor}
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

const styles = StyleSheet.create({
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
  });