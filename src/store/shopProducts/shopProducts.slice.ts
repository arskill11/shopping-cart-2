import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../../shared/types/types';
interface ShopProductsState {
  products: ProductData[];
}

const initialState: ShopProductsState = {
  products: [],
};

const shopProductsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {
    saveProducts: (state, action: PayloadAction<ProductData[]>) => {
      state.products = action.payload;
    },
  },
});

export const { saveProducts } = shopProductsSlice.actions;

export default shopProductsSlice.reducer;
