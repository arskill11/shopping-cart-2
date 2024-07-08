import { configureStore } from '@reduxjs/toolkit';
import cartProductsReducer from './cartProducts/cartProducts.slice';
import shopProductsReducer from './shopProducts/shopProducts.slice';
import authReducer from './auth/auth.slice';
import { fakeshopApi } from './api/api.slice';

export const store = configureStore({
  reducer: {
    [fakeshopApi.reducerPath]: fakeshopApi.reducer,
    shopProducts: shopProductsReducer,
    cartProducts: cartProductsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeshopApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
