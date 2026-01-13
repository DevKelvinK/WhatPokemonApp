import { useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';

import HomeComponent from './src/components/screens/Home/home.component';
import CameraComponent from './src/components/screens/Camera/camera.component';
import MenssageModal from './src/components/menssageModal.component';

export default function App() {
  const [showCameraComponent, setShowCameraComponent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { hasPermission, requestPermission } = useCameraPermission();

  const handleOpenCamera = async () => {
    if (!hasPermission) {
      const granted = await requestPermission();

      if (granted) {
        setShowCameraComponent(true);
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    } else {
      setShowCameraComponent(true);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      {showCameraComponent ? (
        <CameraComponent
          onCloseComponent={() => setShowCameraComponent(false)}
          onCloseModal={() => setShowModal(false)}
        />
      ) : (
        <HomeComponent onOpenCamera={handleOpenCamera} />
      )}

      {showModal && (
        <MenssageModal
          msg="Você precisa conceder permissão da câmera para ler o QRCode."
          onClose={() => setShowModal(false)}
          onRetry={handleOpenCamera}
        />
      )}
    </>
  );
}