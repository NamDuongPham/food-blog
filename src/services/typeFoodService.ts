import { createApi } from '@reduxjs/toolkit/query/react';
import { TypeFood } from '../types/food';
import { baseQueryWithPostService } from "./baseQuery";


export const typeFoodApi = createApi({
  reducerPath: "typeFoodApi",
  baseQuery: baseQueryWithPostService,
  endpoints: (builder) => ({
    getTypeFood: builder.query<TypeFood[],void>({
      query: () => "typeFoods",
    }),
    getTypeFoodById: builder.query({
      query: (id) => `typeFoods/${id}`,
    }),
    getTypeFoodByCategory: builder.query<TypeFood[], string>({
      query: (category) => `typeFoods?category=${category}`,
    }),
  }),
});

export const {useGetTypeFoodQuery,useGetTypeFoodByIdQuery,useGetTypeFoodByCategoryQuery} = typeFoodApi;