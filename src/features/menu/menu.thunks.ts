import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo';

const fetchMenu = createAsyncThunk(
  'cart/fetchMenu',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const menu = data.items.reduce((acc: any, {
      category_id, category_name, id, name, price,
    } : any) => {
      const items = acc.find((item: any) => category_id === item.category_id);

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
