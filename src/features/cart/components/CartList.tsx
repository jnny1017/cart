import {
  GrClose,
} from 'react-icons/gr';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { decrementCount, deleteCart, incrementCount } from '../cartSlice';
import Counter from '../../../components/Counter';
import { MenuInfo } from '../cart.models';
import {
  Section, Name, Price, MenuItem, DeleteButton,
} from '../../../styles/menuStyle';
import comma from '../../../utils/utils';

export default function CartList() {
  const dispatch = useAppDispatch();

  const { menus } = useAppSelector((state) => state.cart);

  const handleClickDelete = (menu: MenuInfo) => {
    dispatch(deleteCart(menu));
  };

  return (
    <Section>
      {menus.map((menu, index) => (
        <MenuItem key={menu.id}>
          <Name>{menu.name}</Name>
          <Price>
            ₩
            {comma(menu.price)}
          </Price>
          <DeleteButton onClick={() => handleClickDelete(menu)}>
            삭제
            <GrClose />
          </DeleteButton>
          <Counter
            count={menu.count}
            onDecrementClick={() => dispatch(decrementCount(index))}
            onIncrementClick={() => dispatch(incrementCount(index))}
          />
        </MenuItem>
      ))}
    </Section>
  );
}
