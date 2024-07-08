import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartData } from '../../shared/types/types';

const initialState: CartData[] = [];

const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addNewProduct: (
      state,
      action: PayloadAction<{ product: CartData; quantity: number }>,
    ) => {
      state.push({
        ...action.payload.product,
        quantity: action.payload.quantity,
      });
    },
    clearCart: (state) => {
      state = [];
      return state;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.forEach((product, index) => {
        if (product.id === action.payload) {
          state.splice(index, 1);
        }
      });
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      state.forEach((product) => {
        if (product.id === action.payload.id) {
          product.quantity += action.payload.quantity;
        }
      });
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.forEach((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
        }
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.forEach((product) => {
        if (product.id === action.payload) {
          product.quantity -= 1;
        }
      });
    },
  },
});

export const {
  addNewProduct,
  changeQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  deleteProduct,
} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
