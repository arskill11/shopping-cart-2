import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthorized: boolean;
  access_token: string;
  refresh_token: string;
}

export interface TokensPayload {
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
    saveTokens: (state, action: PayloadAction<TokensPayload>) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.isAuthorized = true;
    },
    authorize: (state) => {
      state.isAuthorized = true;
    },
  },
});

export const { logOut, saveTokens, authorize } = authSlice.actions;

export default authSlice.reducer;
