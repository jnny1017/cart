import { createAsyncThunk } from '@reduxjs/toolkit';
import { MenuItem, MenuItemResponse } from './models/menu.models';

const URL = 'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo';

const fetchMenu = createAsyncThunk(
  'cart/fetchMenu',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const menu = data.items.reduce((acc: Array<MenuItem>, {
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
      minimum_order_price: data.minimum_order_price,
      merchant_name: data.merchant_name,
      items: menu,
      discounts: data.discounts,
    };
  },
);

export default fetchMenu;
