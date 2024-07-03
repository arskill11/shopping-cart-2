import { configureStore } from '@reduxjs/toolkit';
import cartProductsReducer from './cartProducts/cartProducts.slice';
import quantityCounterReducer from './quantityCounter/quantityCounter.slice';

export const store = configureStore({
  reducer: {
    cartProducts: cartProductsReducer,
    quantityCounter: quantityCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
