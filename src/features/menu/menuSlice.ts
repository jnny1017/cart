import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { menuApi } from '../../app/services/menu';
import { MerchantInfo } from './models/menu.models';

const initialState: MerchantInfo = {
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
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { data: initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      menuApi.endpoints.menus.matchFulfilled,
      (state, { payload } : PayloadAction<MerchantInfo>) => {
        state.data = payload;
      },
    );
  },
});

export default menuSlice.reducer;
