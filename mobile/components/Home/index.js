import React, { useState, useEffect } from "react";

import EntryRow from "../Entry/EntriesList/index";
import EntryMenu from "../Entry/EntryMenu/index";

import {
  AppHeader,
  LogoTitle,
  Balance,
  AboutBalance,
  ListView,
  List,
  EmptyListText,
  EmptyTextView,
} from "./styles";

import AddNewItem from "../Modals/AddItem";

import { Container } from "../Login/styles";


export default function Home(props) {
  //setBalance sera executado sempre que um novo gasto/entrada for inserido a partir do menu *IMPLEMENTAR
  //setCurrency provavelmente sera utilizado por configuracao depois


  const today = new Date();

  const [modalVisible, setModalVisible] = useState(false);
  const [balance, setBalance] = useState();
  const [currency, setCurrency] = useState("R$");
  const [modalValueName, setModalValueName] = useState("");
  const [modalMoneyValue, setModalMoneyValue] = useState();
  const [listItems, setListItems] = useState([]);
  const [checked, setChecked] = useState("");

  //efeito que ira fazer a soma de todos os itens e atualizara o state do saldo atual
  useEffect(() => {
    async function calculateBalace(list) {
      let sum = 0;
      list.map((listItem, index) => {
        return (sum += listItem.valor);
      });
      console.log(sum);
      setBalance(sum.toFixed(2));
    }
    calculateBalace(listItems);
  }, [listItems]);

  const changeModalVisibility = (modalState) => {
    setModalVisible(!modalState);
  };

  const addListItem = (name, value) => {
    //cria novo objeto para ser inserido no state
    const newItem = {
      nome: name,
      tipo: checked,
      valor: parseFloat(checked + value),
      data: {
        day: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear(),
      },
    };
    
    //atualiza o state baseado no array antigo e fecha o modal
    setListItems((state) => [...listItems, newItem]);
    setModalVisible(!modalVisible);
    console.log(listItems);
    //limpeza dos states
    setModalValueName("");
    setModalMoneyValue("");
    setChecked("");
  };

  return (
    <Container>
      <AddNewItem
        visibility={modalVisible}
        close={changeModalVisibility}
        title="Adicionar item"
        backButtonAction={() => {
          setModalValueName("");
          setModalMoneyValue("");
          setModalVisible(!modalVisible);
        }}
        valueName={modalValueName}
        moneyValue={modalMoneyValue}
        updateModalValueName={setModalValueName}
        updateModalMoneyValue={setModalMoneyValue}
        addItem={() => addListItem(modalValueName, modalMoneyValue)}
        despesa="-"
        entrada="+"
        selectDespesa={() => setChecked("-")}
        selectEntrada={() => setChecked("+")}
        checkedDespesa={checked === "-" ? "checked" : "unchecked"}
        checkedEntrada={checked === "+" ? "checked" : "unchecked"}
      />

      <AppHeader>
        <LogoTitle>Finant</LogoTitle>
        <AboutBalance>Você tem:</AboutBalance>
        <Balance>
          {currency}: {balance}
        </Balance>
      </AppHeader>
      <ListView>
        <EntryMenu addItem={() => setModalVisible(true)} />
        {/* menu para adicionar entries, ficara "grudado" na list */}
        <List>
          {listItems.length === 0 ? (
            <EmptyTextView>
              <EmptyListText> Lista vazia :( </EmptyListText>
              <EmptyListText>
                Adicione uma nova despesa ou entrada
              </EmptyListText>
            </EmptyTextView>
          ) : (
            listItems.map((item) => {
              return (
                <EntryRow
                  moneyValue={item.valor.toFixed(2)}
                  valueName={item.nome}
                  //openModal={showDetails(item.nome, item.valor)}
                  key={item.nome + Date.now()}
                />
              );
            })
          )}
        </List>
      </ListView>
    </Container>
  );
}
