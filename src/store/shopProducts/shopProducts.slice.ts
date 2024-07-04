import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../../shared/types/types';
import { getProductById, getProducts } from '../../api/products';

export interface CurrentProduct extends ProductData {
  isLoading: boolean;
}

interface ShopProductsState {
  products: ProductData[];
  isLoading: boolean;
  currentProduct: CurrentProduct;
}

const initialState: ShopProductsState = {
  products: [],
  isLoading: true,
  currentProduct: {
    isLoading: true,
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      image: '',
    },
    images: [],
  },
};

const shopProductsSlice = createSlice({
  name: 'shopProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductData[]>) => {
          state.products = Object.values(action.payload);
          state.isLoading = false;
        },
      )
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<ProductData>) => {
          state.currentProduct = { ...action.payload, isLoading: false };
        },
      )
      .addCase(fetchProductById.pending, (state) => {
        state.currentProduct.isLoading = true;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  'shopProducts/getProducts',
  getProducts,
);

export const fetchProductById = createAsyncThunk(
  'shopProducts/getProductById',
  getProductById,
);

export default shopProductsSlice.reducer;
