import { createApi } from '@reduxjs/toolkit/query/react';
import customFetchBase from './utils/customFetchBase';
import { BrandData } from './types/products/interfaces';

export const smartphoneBrandApi = createApi({
  reducerPath: 'smartphoneBrandApi',
  baseQuery: customFetchBase,
  tagTypes: ['Brand'],
  endpoints: (builder) => ({
    getBrands: builder.query<BrandData[], null>({
      query() {
        return {
          url: '/smartphones/brand-getall',
          method: 'GET',
          credentials: 'include',
        };
      },
      providesTags: ['Brand'],
    }),
    addBrand: builder.mutation<void, {brand: string}>({
      query(brand) {
        return {
          url: '/smartphones/brand-create',
          method: 'POST',
          body: brand,
          credentials: 'include'
        }
      },
      invalidatesTags: ['Brand']
    })
  }),
});

export const { useGetBrandsQuery, useAddBrandMutation } = smartphoneBrandApi;
