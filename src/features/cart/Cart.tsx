import { useAppSelector } from '../../app/hooks';
import CartHeader from './components/CartHeader';
import CartList from './components/CartList';
import Discount from './components/Discount';
import Payment from './components/Payment';
import EmptyCart from './components/EmptyCart';
import {
  Wrap,
} from '../../styles/menuStyle';

export default function Cart() {
  const { menus } = useAppSelector((state) => state.cart);

  return (
    <Wrap>
      <CartHeader />
      {menus.length > 0
        ? (
          <>
            <CartList />
            <Discount />
            <Payment />
          </>
        )
        : <EmptyCart />}
    </Wrap>
  );
}
