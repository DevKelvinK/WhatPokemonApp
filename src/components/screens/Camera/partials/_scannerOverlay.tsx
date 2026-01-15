import { Dimensions, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import {
  Corner,
  CornerBL,
  CornerBR,
  CornerTL,
  CornerTR,
  Frame,
  FRAME_SIZE,
  Label,
  OverlayBottom,
  OverlayContainer,
  OverlayMiddle,
  OverlaySide,
  OverlayTop,
} from '../stylesCamera';

// Function para limitar a área de leitura do QRCODE na câmera
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const FRAME_LEFT = (SCREEN_WIDTH - FRAME_SIZE) / 2;
const FRAME_TOP = (SCREEN_HEIGHT - FRAME_SIZE) / 2;
const FRAME_RIGHT = FRAME_LEFT + FRAME_SIZE;
const FRAME_BOTTOM = FRAME_TOP + FRAME_SIZE;

export function qrCodeInCenter(frame: {
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  const centerX = frame.x + frame.width / 2;
  const centerY = frame.y + frame.height / 2;

  return (
    centerX >= FRAME_LEFT &&
    centerX <= FRAME_RIGHT &&
    centerY >= FRAME_TOP &&
    centerY <= FRAME_BOTTOM
  );
}

type Props = {
  scanned: boolean;
};

export function ScannerOverlay({ scanned }: Props) {
  const [showLabel, setShowLabel] = useState(false);
  const [hiddenLabel, setHiddenLabel] = useState(false);

  //Trocar a Label quando ler o qr code
  useEffect(() => {
    if (!scanned) {
      setShowLabel(false);
      setHiddenLabel(false);
      return;
    };

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
    <OverlayContainer>
      <OverlayTop />
      <OverlayMiddle>
        <OverlaySide />
        <Frame>
          <Corner style={showLabel ? { borderColor: 'green' } : {}} as={CornerTL} />
          <Corner style={showLabel ? { borderColor: 'green' } : {}} as={CornerTR} />
          <Corner style={showLabel ? { borderColor: 'green' } : {}} as={CornerBL} />
          <Corner style={showLabel ? { borderColor: 'green' } : {}} as={CornerBR} />
        </Frame>
        <OverlaySide />
      </OverlayMiddle>
      <View
        style={{
          ...StyleSheet.absoluteFill,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!hiddenLabel && <Label>Posicione o QR CODE no centro</Label>}
        {showLabel && (
          <Label
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            QR Code lido com sucesso!
          </Label>
        )}
      </View>
      <OverlayBottom />
    </OverlayContainer>
  );
}
