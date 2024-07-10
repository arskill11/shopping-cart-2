import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData } from '../../shared/types/types';
import {
  API_URL,
  SHOPPAGE_PRODUCTS_LIMIT,
  HOMEPAGE_PRODUCTS_LIMIT,
  PRODUCTS_OFFSET,
} from '../../shared/constants/constants';
import { NewUser } from '../../pages/SignUp/types';

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface LogInPayload {
  email: string;
  password: string;
}

interface Tokens {
  access_token: string;
  refresh_token: string;
}

interface UpdateUserBodyPayload {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface UpdateUserPayload {
  id: number;
  properties: UpdateUserBodyPayload;
}

export const fakeshopApi = createApi({
  reducerPath: 'fakeshopApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductData[], string>({
      query: () =>
        `products?offset=${PRODUCTS_OFFSET}&limit=${SHOPPAGE_PRODUCTS_LIMIT}`,
    }),
    getProductById: builder.query<ProductData, string>({
      query: (id) => `products/${id}`,
    }),
    getHomepageProducts: builder.query<ProductData[], string>({
      query: () =>
        `products?offset=${PRODUCTS_OFFSET}&limit=${HOMEPAGE_PRODUCTS_LIMIT}`,
    }),
    createUser: builder.mutation<NewUser, SignUpPayload>({
      query: (userData) => {
        return {
          url: 'users/',
          method: 'POST',
          body: userData,
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    getTokens: builder.mutation<Tokens, LogInPayload>({
      query: (userData) => {
        return {
          url: 'auth/login',
          method: 'POST',
          body: userData,
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    getUserWithSession: builder.query<NewUser, string>({
      query: (token) => {
        return {
          url: 'auth/profile',
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        };
      },
    }),
    updateUser: builder.mutation<NewUser, UpdateUserPayload>({
      query: (data) => {
        return {
          url: `users/${data.id}`,
          method: 'PUT',
          body: data.properties,
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetHomepageProductsQuery,
  useCreateUserMutation,
  useGetTokensMutation,
  useGetUserWithSessionQuery,
  useUpdateUserMutation,
} = fakeshopApi;
