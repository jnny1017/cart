export interface MenuModel {
  id: string,
  name: string,
  price: number,
  count: number,
  discount_rate: number,
  isChecked: boolean,
}

export interface DiscountModel {
  id: string,
  name: string,
  discount_rate: number,
}

export interface CartModel {
  discount: DiscountModel,
  menus: Array<MenuModel>,
  selectedDiscountId: any,
}
