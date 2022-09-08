import { useAppSelector } from '../../../app/hooks';
import { useMenusQuery } from '../../../app/services/menu';
import { Header, Title, StyledLink } from '../../../styles/menuStyle';

export default function MenuHeader() {
  const { data } = useMenusQuery();

  const { merchant_name } = data;

  const { cart: { menus } } = useAppSelector((state) => state);

  const totalCount = menus.reduce(
    (acc, cur) => acc + cur.count,
    0,
  );

  return (
    <Header>
      <Title>{merchant_name}</Title>
      <StyledLink to="cart">
        Cart
        <span>{totalCount}</span>
      </StyledLink>
    </Header>
  );
}
