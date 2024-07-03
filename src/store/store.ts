import { configureStore } from '@reduxjs/toolkit';
import cartProductsReducer from './cartProducts/cartProducts.slice';

export const store = configureStore({
  reducer: {
    cartProducts: cartProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
