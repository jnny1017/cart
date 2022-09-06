import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  DiscountModel, CartModel, MenuModel,
} from './cart.models';

const initialState: CartModel = {
  menus: [],
  discount: {
    id: '',
    name: '',
    discount_rate: 0,
  },
  selectedDiscountId: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<Pick<MenuModel, 'id' | 'name' | 'price'>>) => {
      const selectedMenu = state.menus.find(({ id }) => id === payload.id);

      if (selectedMenu) {
        selectedMenu.count += 1;

        return;
      }

      state.menus.push({
        id: payload.id,
        name: payload.name,
        price: payload.price,
        count: 1,
        discount_rate: 0,
        isChecked: false,
      });
    },
    deleteCart: (state, { payload }: PayloadAction<MenuModel>) => {
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
    selectDiscountId: (state, { payload }: PayloadAction<any>) => {
      state.selectedDiscountId = payload;
    },
    updateDiscount: (state: any, { payload }: PayloadAction<any>) => {
      state.menus = state.menus
        .map((item: MenuModel) => (
          item.id === payload.menu.id
            ? {
              ...item,
              isChecked: payload.isChecked,
              discount_rate: payload.isChecked ? state.discount.discount_rate : 0,
            }
            : item
        ));
    },
  },
});

export const {
  addCart, deleteCart, incrementCount, decrementCount, selectDiscount, updateDiscount,
  selectDiscountId,
} = cartSlice.actions;

export default cartSlice.reducer;
