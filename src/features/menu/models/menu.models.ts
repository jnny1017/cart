import { DiscountModel, Menu } from '../../cart/cart.models';

interface Loading {
  isLoading: boolean
}

export interface MerchantInfo extends Loading {
  data: {
    minimum_order_price: number,
    merchant_name: string,
    items: [
      {
        category_id: string,
        category_name: string,
        menu: Array<Menu>,
      },
    ],
    discounts: Array<DiscountModel>
  }
}
