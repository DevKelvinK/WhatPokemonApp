import { Dimensions } from 'react-native';

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

export function qrCodeInCenter(frame: { x: number; y: number; width: number; height: number }) {
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
  hidden: boolean;
}

export function QRCodeReaderTemplate({ hidden }: Props) {
  return (
    <OverlayContainer>
      <OverlayTop />
      <OverlayMiddle>
        <OverlaySide />
        <Frame>
          <Corner as={CornerTL} />
          <Corner as={CornerTR} />
          <Corner as={CornerBL} />
          <Corner as={CornerBR} />
        </Frame>
        <OverlaySide />
      </OverlayMiddle>
      <Label style={{display: hidden ? 'none' : 'flex'}}>Posicione o QR CODE no centro</Label>
      <OverlayBottom />
    </OverlayContainer>
  );
}
