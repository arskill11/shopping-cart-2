import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logIn } from '../../api/auth';

export interface AuthState {
  isAuthorized: boolean;
  access_token: string;
  refresh_token: string;
}

const initialState: AuthState = {
  isAuthorized: false,
  access_token: '',
  refresh_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.access_token = '';
      state.refresh_token = '';
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getTokens.fulfilled,
        (state, action: PayloadAction<AuthState>) => {
          state.access_token = action.payload.access_token;
          state.refresh_token = action.payload.refresh_token;
          if (action.payload.access_token) {
            state.isAuthorized = true;
          }
        },
      )
      .addCase(getTokens.rejected, (state) => {
        state.isAuthorized = false;
      });
  },
});

export const getTokens = createAsyncThunk('auth/getTokens', logIn);

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
