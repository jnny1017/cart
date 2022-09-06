import { useAppSelector } from '../../../app/hooks';
import {
  PaymentButton,
} from '../../../styles/menuStyle';
import comma from '../../../utils/utils';
import merchantInfo from '../../../__mocks__/merchantInfo';

export default function PaymentSection() {
  const { menus } = useAppSelector((state) => state.cart);

  const totalPrice = menus.map(({ price, discount_rate, count }) => price * ((100 - discount_rate) / 100) * count)
    .reduce((acc, cur) => acc + cur, 0);

  const underTotalPrice = totalPrice < merchantInfo.minimum_order_price;

  return (
    <PaymentButton disabled={underTotalPrice}>
      <span>
        총 주문 금액
        {comma(totalPrice)}
      </span>
      {underTotalPrice
        ? (
          <span>
            (최소금액
            {comma(minimum_order_price)}
            이상 주문 가능)
          </span>
        )
        : ''}
    </PaymentButton>
  );
}
