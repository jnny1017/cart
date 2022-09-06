import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addCart } from '../../cart/cartSlice';
import { Menu } from '../../cart/cart.models';
import {
  Section, Category, Name, Price, MenuItem,
} from '../../../styles/menuStyle';
import comma from '../../../utils/utils';

export default function MenuList() {
  const dispatch = useAppDispatch();
  const { menu: { data } } = useAppSelector((state) => state);

  const handleClick = (menu: Menu) => {
    dispatch(addCart(menu));
  };

  return (
    <>
      {data.items.map((item) => (
        <Section key={item.category_id}>
          <Category>{item.category_name}</Category>
          {item.menu.map((menu) => (
            <MenuItem key={menu.id} onClick={() => handleClick(menu)}>
              <Name>{menu.name}</Name>
              <Price>
                {comma(menu.price)}
              </Price>
            </MenuItem>
          ))}
        </Section>
      ))}
    </>
  );
}
