import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DiscountModel } from '../../features/cart/cart.models';
import { MenuItem, MenuItemResponse } from '../../features/menu/models/menu.models';

interface OriginalResponse {
  minimum_order_price: number,
  merchant_name: string,
  items: Array<MenuItemResponse>,
  discounts: Array<DiscountModel>
}

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://us-central1-react-baemin.cloudfunctions.net/',
  }),
  endpoints: (builder) => ({
    menus: builder.query<OriginalResponse, void>({
      query: () => '/merchantInfo',
      transformResponse: (response: OriginalResponse) => {
        const menu = response.items.reduce((acc: MenuItem[], {
          category_id, category_name, id, name, price,
        }: MenuItemResponse) => {
          const items = acc.find((item) => category_id === item.category_id);

          if (items) {
            items.menu.push({ id, name, price });
          } else {
            acc.push({ category_id, category_name, menu: [{ id, name, price }] });
          }

          return acc;
        }, []);

        return {
          minimum_order_price: response.minimum_order_price,
          merchant_name: response.merchant_name,
          items: menu,
          discounts: response.discounts,
        };
      },
    }),
  }),
});

export const { useMenusQuery } = menuApi;
