import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartData } from '../../shared/types/types';

const initialState: CartData[] = [];

const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<CartData>) => {
      state.push(action.payload);
    },
    clearCart: (state) => {
      while (state.length > 0) {
        state.pop();
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.map((product, index) => {
        if (product.id === action.payload) {
          state.splice(index, 1);
        }
      });
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity = action.payload.quantity;
        }
      });
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.map((product) => {
        if (product.id === action.payload) {
          product.quantity += 1;
        }
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.map((product) => {
        if (product.id === action.payload) {
          product.quantity -= 1;
        }
      });
    },
    incrementQuantityByNumber: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += action.payload.amount;
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
  incrementQuantityByNumber,
} = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
