import React, { useState, useEffect } from 'react';

import {
    Container,
    InputField,
    LogoTitle,
    Buttons,
    ButtonsView,
    ButtonText,
    About
} from  './styles';

export default function Login({props, navigation, route}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //*TODO
    //criar Effect que tratara os dados vindos da tela signup 
    //criar metodo login passando os dados para o resto da aplicacao utilizando context ou redux

    return (
        <Container>
            <LogoTitle>Finant</LogoTitle>
            <About>Your money in one place</About>
                <InputField 
                    autoCapitalize="none"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholder="e-mail"
                />
                <InputField 
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                />
            <ButtonsView>
                <Buttons onPress={() => navigation.navigate("Home")}>
                    <ButtonText>Login</ButtonText>
                </Buttons>
                <Buttons onPress={() => navigation.navigate("Signup")}>
                    <ButtonText>Signup</ButtonText>
                </Buttons>
            </ButtonsView>
        </Container>
    )
}