import styled from 'styled-components/native';

// Templat CAM
export const FRAME_SIZE = 260;

export const OverlayContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: space-between;
`;

export const OverlayTop = styled.View`
  background-color: rgba(0, 0, 0, 0.55);
  height: 20%;
`;

export const OverlayMiddle = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${FRAME_SIZE}px;
`;

export const OverlaySide = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const Frame = styled.View`
  width: ${FRAME_SIZE}px;
  height: ${FRAME_SIZE}px;
`;

export const OverlayBottom = styled.View`
  background-color: rgba(0, 0, 0, 0.55);
  height: 20%;
`;

export const Label = styled.Text`
  position: absolute;
  bottom: ${() => FRAME_SIZE / 1.6}px;
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding-block: 8px;
  padding-inline: 14px;
  border-radius: 10px;

  background-color: #ffffffa6;
`;

export const Corner = styled.View`
  position: absolute;
  width: 28px;
  height: 28px;
  border-color: #fff;
`;

export const CornerTL = styled(Corner)`
  top: 0;
  left: 0;
  border-left-width: 4px;
  border-top-width: 4px;
`;

export const CornerTR = styled(Corner)`
  top: 0;
  right: 0;
  border-right-width: 4px;
  border-top-width: 4px;
`;

export const CornerBL = styled(Corner)`
  bottom: 0;
  left: 0;
  border-left-width: 4px;
  border-bottom-width: 4px;
`;

export const CornerBR = styled(Corner)`
  bottom: 0;
  right: 0;
  border-right-width: 4px;
  border-bottom-width: 4px;
`;