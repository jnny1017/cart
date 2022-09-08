import { useAppDispatch } from '../../../app/hooks';
import Checkbox from '../../../components/Checkbox';
import {
  Section, Category, Price, MenuItem, ModalButton,
} from '../../../styles/menuStyle';
import { DiscountModel } from '../cart.models';
import useModal from '../../../hooks/useModal';
import DiscountModal from './DiscountModal';
import { selectDiscount } from '../cartSlice';
import { useMenusQuery } from '../../../app/services/menu';

export default function Discount() {
  const dispatch = useAppDispatch();
  const { data } = useMenusQuery();

  const { discounts } = data;

  const { isOpen, toggle } = useModal();

  const handleOpenModal = (item: DiscountModel) => {
    dispatch(selectDiscount(item));
    toggle();
  };

  const handleCloseModal = () => {
    toggle();
  };

  return (
    <Section>
      <Category>할인</Category>
      {discounts.map((item: DiscountModel) => (
        <MenuItem key={item.id}>
          <Checkbox id={item.id} data={item} onChange={() => {}} />
          <Price>
            {item.discount_rate}
            % 할인
          </Price>
          <ModalButton
            onClick={() => handleOpenModal(item)}
          >
            메뉴 선택
          </ModalButton>
        </MenuItem>
      ))}

      {isOpen && (
        <DiscountModal onClick={handleCloseModal} />
      )}
    </Section>
  );
}
