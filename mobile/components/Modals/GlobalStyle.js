import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin: auto;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
`;

export const TitleView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: #80f3bf;
`;

export const Title = styled.Text`
  
  font-size: 24px;
  padding: 10px;
`;

export const ModalBody = styled.View`
  width: 100%;
  padding: 10px;
`;

export const LabelText = styled.Text`
  font-size: 24px;
`;

export const ModalInput = styled.TextInput`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  border-width: 1px;
  border-radius: 10px;
  border-color: white;
`;

export const ModalFooter = styled.View`
  width: 100%;
  padding: 5px;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  background-color: #80f3bf;
  align-items: center;
`;

export const TextButton = styled.Text`
  margin: 5px;
  font-weight: 500;
  color: white;
  font-size: 24px;
`;

export const RadioView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 5px 0;
`;
