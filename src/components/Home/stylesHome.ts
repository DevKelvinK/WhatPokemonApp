import styled from 'styled-components/native';

import { colors } from '../../styles/global.styles';

export const H1 = styled.Text`
  text-transform: uppercase;
  color: ${colors.primary};
  font-size: 18px;
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
