import styled from 'styled-components/native';
import { colors } from './colors';

export const ContainerBG = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.View`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ContainerContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding-block: 40px;
  padding-inline: 28px;
`;

export const H1 = styled.Text`
  text-transform: uppercase;
  color: ${colors.primary};
  font-size: 20px;
`;

export const LogoImage = styled.Image`
  width: 70%;
  height: 250px;
`;

export const ButtonOpenCam = styled.TouchableOpacity`
  padding-inline: 20px;
  padding-block: 16px;
  border-radius: 16px;
  border: 2px solid #000;
  background-color: #006eff;
`;

export const LabelBtn = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
