import { DiscountModel, MenuModel } from '../../cart/cart.models';

export interface MenuItem {
  category_id: string,
  category_name: string,
  menu: Array<Pick<MenuModel, 'id' | 'name' | 'price'>>,
}

export interface MerchantInfo {
  minimum_order_price: number,
  merchant_name: string,
  items: Array<MenuItem>,
  discounts: Array<DiscountModel>
}

export interface MenuItemResponse {
  category_id: string,
  category_name: string,
  id: string,
  name: string,
  price: number,
}
