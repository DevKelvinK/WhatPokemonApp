import { StyleSheet, View, Text } from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../routes/screen.routes';

import MenssageModal from '../../menssageModal.component';
import {
  QRCodeReaderTemplate,
  qrCodeInCenter,
} from './partials/_qrcReaderTemplate.component';
import { ButtonSimulat, Label } from './stylesCamera';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Camera'>;

export default function CameraComponent() {
  const navigation = useNavigation<NavigationProp>();
  const device = useCameraDevice('back');
  const [scanned, setScanned] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [hiddenLabel, setHiddenLabel] = useState(false);

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

  //Mostrar Label quando ler o qr code
  useEffect(() => {
    if (!scanned) return;

    const hideLabelTimer = setTimeout(() => {
      setHiddenLabel(true);
    }, 1000);

    const showLabelTimer = setTimeout(() => {
      setShowLabel(true);
    }, 1200);

    return () => {
      clearTimeout(showLabelTimer);
      clearTimeout(hideLabelTimer);
    };
  }, [scanned]);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />

      <QRCodeReaderTemplate hidden={hiddenLabel} />

      {showLabel && (
        <Label
          style={{
            color: 'green',
            fontWeight: 'bold',
            fontSize: 20,
            bottom: 155,
            left: 40,
          }}
        >
          QR Code lido com sucesso!
        </Label>
      )}

      {/* Simulação do scan */}
      {/* <ButtonSimulat
        onPress={() => navigation.navigate('InfosPokemon', { id: 4 })}
      >
        <Text>Simular Scan → Infos</Text>
      </ButtonSimulat> */}
    </View>
  );
}
