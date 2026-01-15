import styled from 'styled-components/native';
import { colors } from '../../../styles/global.styles';

export const H1 = styled.Text`
  text-transform: uppercase;
  color: ${colors.secondary};
  font-size: 18px;
`;

export const InfosContainer = styled.View`
  display: flex;
  gap: 14px;
  width: 100%;

  color: ${colors.secondary};
`;

export const NameText = styled.Text`
  color: ${colors.secondary};
  font-size: 18px;
`;

export const TypeText = styled.Text`
  color: ${colors.secondary};
  font-size: 18px;
`;

export const ButtonBack = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 40%;
  padding-block: 10px;
  margin-top: 30px;
  border-radius: 8px;

  background-color: white;
`;

export const ContainerOverlay = styled.View`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
`;

export const LoadText = styled.Text`
  color: #fff;
  margin-top: 16px;
  font-size: 18px;
`;