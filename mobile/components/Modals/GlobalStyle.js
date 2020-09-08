import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    margin: auto;
    background-color: white;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
`;


export const TitleView = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    padding: 10px;
`

export const ModalBody = styled.View`
    width: 100%;
`;

export const LabelText = styled.Text`
    font-size: 16px;
`;

export const ModalInput = styled.TextInput`
    width: 100%;
`;

export const ModalFooter = styled.View`
    width: 100%;
`;

export const ModalButton = styled.TouchableOpacity`
    width: 100%;
    border-radius: 10px;
    background-color: #80f3bf;
    align-items: center;
`

export const TextButton = styled.Text`
    font-weight: 500;
    color: white;
    font-size: 24px;
`;