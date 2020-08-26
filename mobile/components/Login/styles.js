import styled from 'styled-components/native';

export const Container = styled.View`
    flex: auto;
    background-color: #1c1c1c;
    align-items: center;
    justify-content: center;
`;

export const LogoTitle = styled.Text`    
    color: #02EEA2;
    font-size: 54px;
    text-align: center;
`;

export const About = styled.Text`
    color: #80f3bf;
    font-size: 16px; 
    margin-bottom: 100px;
`;

export const InputField = styled.TextInput`
    color: #80f3bf;
    margin-bottom: 20px;
    padding: 10px;
    width: 300px;
    border: 2px solid white;
    border-radius: 8px;
`;

export const ButtonsView = styled.View`
    flex-direction: row;
    width: 300px;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

export const Buttons = styled.TouchableOpacity`
    height: 42px;
    width: 145px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: #262626;  
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;

export const ButtonSignupScreen = styled.View`
    width: 300px;
    align-items: center;
    justify-content: center;
`;