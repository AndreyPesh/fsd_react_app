import { createApi } from '@reduxjs/toolkit/query/react';
import customFetchBase from './utils/customFetchBase';
import { SmartphoneData } from './types/products/interfaces';

export const smartphoneApi = createApi({
  reducerPath: 'smartphoneApi',
  baseQuery: customFetchBase,
  tagTypes: ['Smartphone'],
  endpoints: (builder) => ({
    getSmartphoneList: builder.query<SmartphoneData[], null>({
      query() {
        return {
          url: '/smartphones/get',
          method: 'GET',
          credentials: 'include',
        };
      },
      providesTags: ['Smartphone'],
    }),
    getSmartphone: builder.query<SmartphoneData, { id: string }>({
      query({ id }) {
        return {
          url: `/smartphones/get/${id}`,
          method: 'GET',
          credentials: 'include',
        };
      },
      providesTags: ['Smartphone'],
    }),
    addSmartphone: builder.mutation<void, FormData>({
      query(data) {
        return {
          url: '/smartphones/create',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      invalidatesTags: ['Smartphone'],
    }),
    updateSmartphone: builder.mutation<void, {data: FormData, id: string}>({
      query({ data, id}) {
        return {
          url: `/smartphones/update/${id}`,
          method: 'PATCH',
          body: data,
          credentials: 'include',
        };
      },
      invalidatesTags: ['Smartphone'],
    }),
    deleteSmartphones: builder.mutation<void, string[]>({
      query(data) {
        return {
          url: '/smartphones/delete',
          method: 'DELETE',
          body: data,
          credentials: 'include',
        };
      },
      invalidatesTags: ['Smartphone'],
    }),
  }),
});

export const {
  useGetSmartphoneListQuery,
  useGetSmartphoneQuery,
  useAddSmartphoneMutation,
  useUpdateSmartphoneMutation,
  useDeleteSmartphonesMutation,
} = smartphoneApi;
