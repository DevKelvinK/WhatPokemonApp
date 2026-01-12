import { Modal } from 'react-native';
import {
  OverlayModal,
  ContentContainer,
  MsgText,
  ContainerBtns,
  ButtonModal,
  BtnText,
} from './stylesModal';

type Props = {
  msg: string;
  onClose?: () => void;
  onRetry?: () => void;
};

export default function MenssageModal({ msg, onClose, onRetry }: Props) {
  return (
    <Modal transparent animationType="fade">
      <OverlayModal>
        <ContentContainer>
          <MsgText>{msg}</MsgText>

          <ContainerBtns>
            {onRetry && (
              <ButtonModal onPress={onRetry}>
                <BtnText>Permitir</BtnText>
              </ButtonModal>
            )}

            {onClose && (
              <ButtonModal onPress={onClose}>
                <BtnText>Voltar</BtnText>
              </ButtonModal>
            )}
          </ContainerBtns>
        </ContentContainer>
      </OverlayModal>
    </Modal>
  );
}
