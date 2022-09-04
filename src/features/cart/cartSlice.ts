import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DiscountModel, CartModel, Menu } from './cart.models';

const initialState: CartModel = {
  menu: {
    id: '',
    name: '',
    price: 0,
    count: 0,
    discount_rate: 0,
  },
  discount: {
    id: '',
    name: '',
    discount_rate: 0,
  },
  menus: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<Menu>) => {
      const selectedMenu = state.menus.find(({ id }) => id === payload.id);

      if (selectedMenu) {
        selectedMenu.count += 1;

        return;
      }

      state.menus.push({
        id: payload.id,
        name: payload.name,
        price: payload.price,
        count: state.menu.count + 1,
        discount_rate: 0,
      });
    },
    deleteCart: (state, { payload }: PayloadAction<Menu>) => {
      state.menus = state.menus.filter((menu) => menu.id !== payload.id);
    },
    incrementCount: (state, { payload }: PayloadAction<number>) => {
      state.menus[payload].count += 1;
    },
    decrementCount: (state, { payload }: PayloadAction<number>) => {
      if (state.menus[payload].count <= 1) {
        return;
      }

      state.menus[payload].count -= 1;
    },
    selectDiscount: (state, { payload }: PayloadAction<DiscountModel>) => {
      state.discount = {
        id: payload.id,
        name: payload.name,
        discount_rate: payload.discount_rate,
      };
    },
    updateDiscount: (state, { payload }: PayloadAction<Array<DiscountModel>>) => {
      const selectedCartModel = payload.filter(({ id }: DiscountModel) => id);

      state.menus = state.menus
        .map((item: any) => (
          state.menus.filter((menu) => selectedCartModel.some((selectedMenu) => selectedMenu.id === menu.id))
            ? { ...item, discount_rate: state.discount.discount_rate }
            : item
        ));
    },
  },
});

export const {
  addCart, deleteCart, incrementCount, decrementCount, selectDiscount, updateDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
