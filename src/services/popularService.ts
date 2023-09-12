import { createApi } from '@reduxjs/toolkit/query/react';
import { Popular } from '../types/popular';
import { baseQueryWithPostService } from "./baseQuery";


export const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: baseQueryWithPostService,
  endpoints: (builder) => ({
    getPopularFoods: builder.query<Popular[],void>({
      query: () => "mostPopulars?_expand=typeFood",
    }),
    getPopularFoodById: builder.query({
      query: (id) => `mostPopulars/${id}`,
    }),

  }),
});

export const {useGetPopularFoodsQuery,useGetPopularFoodByIdQuery} = popularApi;