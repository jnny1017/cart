import { PropsWithChildren } from 'react';
import {
  GrClose,
} from 'react-icons/gr';

import {
  StyledModal, ModalContent, CloseButton,
} from '../styles/menuStyle';

interface Props {
  title: string;
  onClick: () => void;
}

export default function Modal({ title, children, onClick }: PropsWithChildren<Props>) {
  return (
    <StyledModal>
      <ModalContent>
        <CloseButton onClick={onClick}>
          닫기
          <GrClose />
        </CloseButton>
        <div>{title}</div>
        <div>{children}</div>
      </ModalContent>
    </StyledModal>
  );
}
