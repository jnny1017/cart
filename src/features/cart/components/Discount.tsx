import { useAppDispatch } from '../../../app/hooks';
import useCheckbox from '../../../hooks/useCheckbox';
import {
  Section, Category, Price, MenuItem, ModalButton,
} from '../../../styles/menuStyle';
import merchantInfo from '../../../__mocks__/merchantInfo';
import { DiscountModel } from '../cart.models';
import useModal from '../../../hooks/useModal';
import DiscountModal from './DiscountModal';
import { selectDiscount, updateDiscount } from '../cartSlice';

export default function Discount() {
  const dispatch = useAppDispatch();

  const { checkedList, Checkbox } = useCheckbox();
  const { isOpen, toggle } = useModal();

  const handleOpenModal = (item: DiscountModel) => {
    dispatch(selectDiscount(item));
    toggle();
  };

  const handleCloseModal = (item: any) => {
    if (item.length > 0) {
      dispatch(updateDiscount(item));
    }

    toggle();
  };

  return (
    <Section>
      <Category>할인</Category>
      {merchantInfo.discounts.map((item: DiscountModel) => (
        <MenuItem key={item.id}>
          <Checkbox id={item.id} data={item} />
          <Price>
            {item.discount_rate}
            % 할인
          </Price>
          <ModalButton disabled={!checkedList.includes(item)} onClick={() => handleOpenModal(item)}>
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
