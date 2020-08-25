import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #1c1c1c;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LogoTitle = styled.Text`
    color: #02EEA2;
    font-size: 48;
    text-align: center;
    margin: 1rem 0;
`;

export const InputField = styled.TextInput`
    width: 60%;
    height: 16px;

    margin: 16px;
    padding: 20px;
    color: #80f3be;

    border: 2px solid black;
    border-radius: 10px;
`;

export const Buttons = styled.TouchableOpacity`
    background-color: #3c3c3c;
`