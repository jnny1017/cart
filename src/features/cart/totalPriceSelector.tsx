import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

const menusSelector = (state: RootState) => state.cart.menus;

const totalPriceSelector = createSelector(
  menusSelector,
  (menus) => menus.map(({ price, discount_rate, count }) => price * ((100 - discount_rate) / 100) * count)
    .reduce((acc: any, cur: any) => acc + cur, 0),
);

export default totalPriceSelector;
