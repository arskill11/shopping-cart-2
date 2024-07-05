import { configureStore } from '@reduxjs/toolkit';
import cartProductsReducer from './cartProducts/cartProducts.slice';
import shopProductsReducer from './shopProducts/shopProducts.slice';
import authReducer from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    cartProducts: cartProductsReducer,
    shopProducts: shopProductsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
