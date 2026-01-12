import styled from 'styled-components/native';

export const OverlayModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ContentContainer = styled.View`
  width: 80%;
  padding: 20px;
  border-radius: 8px;

  align-items: center;

  background-color: rgba(225, 225, 225, 0.9);
`;

export const MsgText = styled.Text`
  text-align: center;
  margin-bottom: 24px;
`;

export const ContainerBtns = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  width: 100%;
`;

export const ButtonModal = styled.TouchableOpacity`
  width: 40%;
  padding-block: 10px;
  border-radius: 5px;
  border: 1px solid black;

  background-color: #fff;
`;

export const BtnText = styled.Text`
  text-align: center;
  color: black;
`;
