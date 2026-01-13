import { StyleSheet, View } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

import { ButtonCloseCam, LabelBtn } from './stylesCamera';
import MenssageModal from '../../menssageModal.component';

type Props = {
  onCloseComponent: () => void;
  onCloseModal: () => void;
};

export default function CameraComponent({
  onCloseComponent,
  onCloseModal,
}: Props) {
  const device = useCameraDevice('back');

  if (device == null) {
    return (
      <MenssageModal
        msg="Nenhum dispositivo de câmera encontrado"
        onClose={onCloseModal}
      ></MenssageModal>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />

      <ButtonCloseCam onPress={onCloseComponent}>
        <LabelBtn>X</LabelBtn>
      </ButtonCloseCam>
    </View>
  );
}
