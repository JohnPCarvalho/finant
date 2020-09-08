import styled from 'styled-components/native';

export const MenuRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-width: 1px;
    border-radius: 10px;
    border-color: #424242;
    background-color: #424242;
`;

export const MenuText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const AddButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #00F5CA;
    border-width: 1px;
    border-color: #00F5CA; 
    border-radius: 25px;
`;

export const ButtonText = styled.Text`
    font-weight: 700;
    font-size: 32px;
    color: black;
`;