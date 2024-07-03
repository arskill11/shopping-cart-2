import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 1,
};

const quantityCounterSlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = quantityCounterSlice.actions;

export default quantityCounterSlice.reducer;
