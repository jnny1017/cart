import { useAppDispatch } from '../../../app/hooks';
import { useMenusQuery } from '../../../app/services/menu';
import { addCart } from '../../cart/cartSlice';
import { MenuModel } from '../../cart/cart.models';
import {
  Section, Category, Name, Price, MenuItem,
} from '../../../styles/menuStyle';
import comma from '../../../utils/utils';

export default function MenuList() {
  const dispatch = useAppDispatch();
  const { data } = useMenusQuery();

  const { items } = data;

  const handleClick = (menu: Pick<MenuModel, 'id' | 'name' | 'price'>) => {
    dispatch(addCart(menu));
  };

  return (
    <>
      {items.map((item) => (
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
