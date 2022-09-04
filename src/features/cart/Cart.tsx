import CartHeader from './components/CartHeader';
import CartList from './components/CartList';
import Discount from './components/Discount';
import Payment from './components/Payment';
import {
  Wrap,
} from '../../styles/menuStyle';

export default function Cart() {
  return (
    <Wrap>
      <CartHeader />
      <CartList />
      <Discount />
      <Payment />
    </Wrap>
  );
}
