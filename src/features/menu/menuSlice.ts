import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchMenu from './menu.thunks';
import { MerchantInfo } from './models/menu.models';

const initialState: MerchantInfo = {
  isLoading: false,
  data: {
    minimum_order_price: 0,
    merchant_name: '',
    items: [
      {
        category_id: '',
        category_name: '',
        menu: [],
      },
    ],
    discounts: [],
  },
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = {
          ...payload,
        };
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default menuSlice.reducer;
