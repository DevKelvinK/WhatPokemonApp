import styled from "styled-components/native";

export const colors = {
  primary: '#ff0000',
  secondary: '#ffee00',
};

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