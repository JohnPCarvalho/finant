import React, { useState } from 'react';

import {
    Container,
    InputField,
    LogoTitle
} from  './styles';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <LogoTitle>Finant</LogoTitle>
            <InputField 
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <InputField 
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
            />
        </Container>
    )
}