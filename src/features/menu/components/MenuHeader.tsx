import { useAppSelector } from '../../../app/hooks';
import { Header, Title, StyledLink } from '../../../styles/menuStyle';

export default function MenuHeader() {
  const { menu: { data } } = useAppSelector((state) => state);
  const { cart: { menus } } = useAppSelector((state) => state);

  const totalCount = menus.reduce(
    (acc, cur) => acc + cur.count,
    0,
  );

  return (
    <Header>
      <Title>{data.merchant_name}</Title>
      <StyledLink to="cart">
        Cart
        <span>{totalCount}</span>
      </StyledLink>
    </Header>
  );
}
