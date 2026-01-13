import { useState } from 'react';
import { useCameraPermission } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import { H1, LogoImage, ButtonOpenCam, LabelBtn } from './stylesHome';
import MenssageModal from '../../menssageModal.component';
import { ContainerBG, Overlay, ContainerContent } from '../../../styles/global.styles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeComponent() {
  const navigation = useNavigation<NavigationProp>();

  const { hasPermission, requestPermission } = useCameraPermission();
  const [showModal, setShowModal] = useState(false);

  const checkCameraPermission = async () => {
    if (!hasPermission) {
      if (await requestPermission()) {
        setShowModal(false);
        navigation.navigate('Camera');
      } else {
        setShowModal(true);
      }
    } else {
      navigation.navigate('Camera');
    }
  };

  return (
    <>
      {showModal && (
        <MenssageModal
          msg="Você precisa conceder permissão da câmera para ler o QRCode."
          onRetry={checkCameraPermission}
          onClose={() => setShowModal(false)}
        />
      )}

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
          <ButtonOpenCam onPress={checkCameraPermission}>
            <LabelBtn>Scannear QRCODE</LabelBtn>
          </ButtonOpenCam>
        </ContainerContent>
      </ContainerBG>
    </>
  );
}
