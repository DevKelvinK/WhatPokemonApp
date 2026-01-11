import { StatusBar } from 'react-native';
import {
  ContainerBG,
  H1,
  Overlay,
  ContainerContent,
  LogoImage,
  ButtonOpenCam,
  LabelBtn,
} from './src/styles/stylesComponents';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ContainerBG
        source={require('./src/assets/images/bgPokemonGo.jpeg')}
        resizeMode="cover"
      >
        <Overlay />

        <ContainerContent>
          <H1>Kelvin Kesley Pereira de Souza</H1>

          <LogoImage
            source={require('./src/assets/images/logoPokemonGo.png')}
            resizeMode="contain"
          />

          <ButtonOpenCam>
            <LabelBtn>Scannear QRCODE</LabelBtn>
          </ButtonOpenCam>
        </ContainerContent>
      </ContainerBG>
    </>
  );
}

export default App;
