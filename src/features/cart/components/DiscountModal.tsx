import {
  GrClose,
} from 'react-icons/gr';
import { useAppSelector } from '../../../app/hooks';
import useCheckbox from '../../../hooks/useCheckbox';
import comma from '../../../utils/utils';
import {
  PointPrice, MenuItem, StyledModal, ModalTitle, ModalContent, CloseButton,
} from '../../../styles/menuStyle';

export default function DiscountModal({ onClick } : any) {
  const { Checkbox, checkedList } = useCheckbox();

  const { discount, menus } = useAppSelector((state) => state.cart);
  const { discount_rate, name } = discount;

  const handleClick = () => {
    onClick(checkedList);
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
            <Checkbox id={menu.id} data={menu} />
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
