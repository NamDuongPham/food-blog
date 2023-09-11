import { createApi } from "@reduxjs/toolkit/query/react";
import { Post } from "../types/post";
import { baseQueryWithBlogService } from "./baseQuery";




export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: baseQueryWithBlogService,
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getPostsByUserId: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery ,useGetPostsByUserIdQuery } = blogApi; // , useAddPostMutation
