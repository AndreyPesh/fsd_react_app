import { createApi } from '@reduxjs/toolkit/query/react';
import customFetchBase from './utils/customFetchBase';
import { User } from '2_processes/auth/model/interfaces';
import { setUser } from '2_processes/auth/model/userSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query<User, null>({
      query() {
        return {
          url: '/users/me',
          credentials: 'include',
        };
      },
      providesTags: ['User'],
      transformResponse: (result: { data: { user: User } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
    updateUser: builder.mutation<void, FormData>({
      query(data) {
        return {
          url: '/users/update',
          method: 'PUT',
          body: data,
          credentials: 'include'
        }
      },
      invalidatesTags: ['User']
    }),
    removePhoto: builder.mutation<void, void>({
      query() {
        return {
          url: '/users/remove_photo',
          method: 'PUT',
          credentials: 'include'
        }
      },
      invalidatesTags: ['User']
    })
  }),
});

export const { useUpdateUserMutation, useRemovePhotoMutation } = userApi;
