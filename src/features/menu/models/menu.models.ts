import { DiscountModel, MenuModel } from '../../cart/cart.models';

interface Status {
  isLoading: boolean
}

export interface MenuItem {
  category_id: string,
  category_name: string,
  menu: Array<Pick<MenuModel, 'id' | 'name' | 'price'>>,
}

export interface MenuItemResponse {
  category_id: string,
  category_name: string,
  id: string,
  name: string,
  price: number,
}

export interface MerchantInfo extends Status {
  data: {
    minimum_order_price: number,
    merchant_name: string,
    items: Array<MenuItem>,
    discounts: Array<DiscountModel>
  }
}
