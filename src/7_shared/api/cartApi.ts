import { createApi } from '@reduxjs/toolkit/query/react';
import customFetchBase from './utils/customFetchBase';
import { cartData } from './types/cart/interfaces';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: customFetchBase,
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCartList: builder.query<cartData, void>({
      query() {
        return {
          url: `/cart/get`,
          method: 'GET',
          credentials: 'include',
        };
      },
      providesTags: ['Cart'],
    }),
  }),
});

export const { useGetCartListQuery } = cartApi;
