import { useAppSelector } from '../../../app/hooks';
import { useMenusQuery } from '../../../app/services/menu';
import {
  PaymentButton,
} from '../../../styles/menuStyle';
import comma from '../../../utils/utils';
import totalPriceSelector from '../totalPriceSelector';

export default function PaymentSection() {
  const { data } = useMenusQuery();

  const { minimum_order_price } = data;

  const totalPrice = useAppSelector(totalPriceSelector);

  const underTotalPrice = totalPrice < minimum_order_price;

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
