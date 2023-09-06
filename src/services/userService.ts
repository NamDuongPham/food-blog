import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithPostService } from './baseQuery';
import { IUser } from '../types/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithPostService,
  endpoints: builder => ({
    getUsers: builder.query<IUser[],void>({
      query: () =>  "users",
     

    }),
    getUserById: builder.query({
        query: (id) => `posts/${id}`,
      }),
        
  }),
});
export const { useGetUsersQuery } = userApi;