export interface MenuInfo {
  id: string,
  name: string,
  price: number,
  count: number,
  discount_rate: number,
}

export interface Menu {
  id: string,
  name: string,
  price: number,
}

export interface CartModel {
  menu: MenuInfo,
  discount: DiscountModel,
  menus: Array<MenuInfo>,
}

export interface DiscountModel {
  id: string,
  name: string,
  discount_rate: number,
}
