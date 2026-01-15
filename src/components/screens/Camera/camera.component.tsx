import { StyleSheet, View } from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import MenssageModal from '../../menssageModal.component';
import { ScannerOverlay, qrCodeInCenter } from './partials/_scannerOverlay';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camera'>;

export default function CameraComponent() {
  const navigation = useNavigation<NavigationProp>();
  const device = useCameraDevice('back');

  const [scanned, setScanned] = useState(false);

  // Verifica se existe uma câmera no dispositivo.
  if (device == null) {
    return (
      <MenssageModal
        msg="Nenhum dispositivo de câmera encontrado"
        onClose={() => navigation.goBack()}
      ></MenssageModal>
    );
  }

  // Scann do QR CODE
  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes: Code[]) => {
      if (scanned) return;

      const code = codes.find(c => c.frame && qrCodeInCenter(c.frame));
      if (code?.value) {
        const res = code.value.match(/\d+/)?.[0];
        if (res) {
          const id = Number(res);
          setScanned(true);

          setTimeout(() => {
            navigation.navigate('InfosPokemon', { id });
          }, 2000);
        }
      }
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />

      <ScannerOverlay scanned={scanned} />
    </View>
  );
}