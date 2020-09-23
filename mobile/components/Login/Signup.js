import React, { useState } from 'react';

import api from '../../api/api';

import {
    Container,
    InputField,
    LogoTitle,
    Buttons,
    ButtonsView,
    ButtonText,
    About,
    ButtonSignupScreen
} from  './styles';

export default function Signup({ props, navigation }) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    //*TODO
    //criar funcao que cadastra o usuario no banco de dados

    const registerUser = ( name, email, password ) => {

    } 

    return (
        <Container>
            <LogoTitle>Finant</LogoTitle>
            <About>Your money in one place</About>
                <InputField 
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="e-mail"
                />
                <InputField 
                    autoCapitalize="words"
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                />
                <InputField 
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
                <InputField 
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    placeholder="Confirm your password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            <ButtonSignupScreen>
                <Buttons onPress={() => navigation.navigate("Login", {
                    emailSignup: email,
                    passwordSignup: password
                })} >
                    <ButtonText>Back to login</ButtonText>
                </Buttons>
                <Buttons >
                    <ButtonText>Register</ButtonText>
                </Buttons>
            </ButtonSignupScreen>
        </Container>
    )
}