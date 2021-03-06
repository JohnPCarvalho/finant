import styled from 'styled-components/native';

export const Container = styled.View`
    flex: auto;
    width: 100%;
    margin: 20px 20px;
    justify-content: center;
    align-items: center;
`;

export const AppHeader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LogoTitle = styled.Text`    
    color: #02EEA2;
    font-size: 54px;
    text-align: center;
    margin-bottom: 10px;
`;


export const Balance = styled.Text `
    color: #80f3bf;
    font-size: 56px;
    text-align: center;
`;

export const AboutBalance = styled.Text`
    color: white;
    font-size: 36px;
`; 

export const ListView = styled.View`
    width: 90%;
    flex: 1;
    border-radius: 10px;
    background-color: #616161;
    margin-bottom: 20px;
`;

export const EmptyTextView = styled.View`
    width: 70%;
    margin: 25% auto;
`;

export const EmptyListText = styled.Text`
    font-size: 24px;
    color: white;
    text-align: center;
`;

export const List = styled.ScrollView`
    width: 100%
`;
