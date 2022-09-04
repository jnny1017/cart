import {
  combineReducers, configureStore, ThunkAction, Action,
} from '@reduxjs/toolkit';

import menuReducer from '../features/menu/menuSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducers = {
  menu: menuReducer,
  cart: cartReducer,
};

export const reducers = combineReducers({
  ...rootReducers,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
