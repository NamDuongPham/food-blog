import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithPostService } from './baseQuery';
import { IUser } from '../types/user';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: baseQueryWithPostService,
  endpoints: builder => ({
    getPosts: builder.query<IUser[],void>({
      query: () =>  "posts",
     

    }),
    getPostById: builder.query({
        query: (id) => `posts/${id}`,
      }),
        
  }),
});
export const { useGetPostsQuery,useGetPostByIdQuery } = postApi;