import {
  GrBasket,
} from 'react-icons/gr';

import {
  EmptyContent, StyledLinkButton,
} from '../../../styles/menuStyle';

export default function EmptyCart() {
  return (
    <EmptyContent>
      <GrBasket />
      장바구니가 비었어요
      <StyledLinkButton to="/">
        장바구니 담기
      </StyledLinkButton>
    </EmptyContent>
  );
}
