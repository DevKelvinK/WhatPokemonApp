import { H1, LogoImage, ButtonOpenCam, LabelBtn } from './stylesHome';

import { ContainerBG, Overlay, ContainerContent } from '../../../styles/global.styles';

type Props = {
  onOpenCamera: () => void;
};

export default function HomeComponent({ onOpenCamera }: Props) {
  return (
    <ContainerBG
      source={require('../../../assets/images/bgPokemonGo.jpeg')}
      resizeMode="cover"
    >
      <Overlay />

      <ContainerContent>
        <H1>Kelvin Kesley Pereira de Souza</H1>

        <LogoImage
          source={require('../../../assets/images/logoPokemonGo.png')}
          resizeMode="contain"
        />

        <ButtonOpenCam onPress={onOpenCamera}>
          <LabelBtn>Scannear QRCODE</LabelBtn>
        </ButtonOpenCam>
      </ContainerContent>
    </ContainerBG>
  );
}
