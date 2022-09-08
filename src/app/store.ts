import {
  combineReducers, configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import cartReducer from '../features/cart/cartSlice';
import { menuApi } from './services/menu';

const rootReducers = {
  [menuApi.reducerPath]: menuApi.reducer,
  cart: cartReducer,
};

export const reducers = combineReducers({
  ...rootReducers,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
