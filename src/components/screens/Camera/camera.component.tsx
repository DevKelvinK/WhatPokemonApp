import { StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import { ButtonSimulat } from './stylesCamera';
import MenssageModal from '../../menssageModal.component';
import QRCodeReaderTemplate from './partials/_qrcReaderTemplate.component';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camera'>;

export default function CameraComponent() {
  const device = useCameraDevice('back');
  const navigation = useNavigation<NavigationProp>();

  if (device == null) {
    return (
      <MenssageModal
        msg="Nenhum dispositivo de câmera encontrado"
        onClose={() => navigation.goBack()}
      ></MenssageModal>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />

      <QRCodeReaderTemplate/>

      {/* Simulação do scan */}
      <ButtonSimulat onPress={() => navigation.navigate('InfosPokemon')}>
        <Text>Simular Scan → Infos</Text>
      </ButtonSimulat>
    </View>
  );
}