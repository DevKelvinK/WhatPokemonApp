import {
  Corner,
  CornerBL,
  CornerBR,
  CornerTL,
  CornerTR,
  Frame,
  Label,
  OverlayBottom,
  OverlayContainer,
  OverlayMiddle,
  OverlaySide,
  OverlayTop,
} from '../stylesCamera';

export default function QRCodeReaderTemplate () {
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
      <Label>Aponte a câmera para o QR CODE</Label>
      <OverlayBottom />
    </OverlayContainer>
  );
}