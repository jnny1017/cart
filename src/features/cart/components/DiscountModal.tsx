import {
  GrClose,
} from 'react-icons/gr';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Checkbox from '../../../components/Checkbox';
import comma from '../../../utils/utils';
import {
  PointPrice, MenuItem, StyledModal, ModalTitle, ModalContent, CloseButton,
} from '../../../styles/menuStyle';
import { updateDiscount } from '../cartSlice';

export default function DiscountModal({ onClick } : any) {
  const dispatch = useAppDispatch();

  const { discount, menus } = useAppSelector((state) => state.cart);
  const { discount_rate, name } = discount;

  const handleClick = () => {
    onClick();
  };

  const handleChange = (isChecked: boolean, menu: any) => {
    dispatch(updateDiscount({ isChecked, menu }));
  };

  return (
    <StyledModal>
      <ModalContent>
        <ModalTitle>
          <strong>
            {name}
          </strong>
          <CloseButton onClick={handleClick}>
            닫기
            <GrClose />
          </CloseButton>
        </ModalTitle>
        {menus.map((menu) => (
          <MenuItem key={menu.id}>
            <Checkbox id={menu.id} data={menu} onChange={(isChecked) => handleChange(isChecked, menu)} />
            <PointPrice>
              -₩
              {comma(Math.round((menu.price * menu.count) * (discount_rate / 100)))}
              할인
            </PointPrice>
          </MenuItem>
        ))}
      </ModalContent>
    </StyledModal>
  );
}
