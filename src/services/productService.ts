import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithBlogService } from "./baseQuery";
import { Product } from "../types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithBlogService,
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    
  }),
});

export const { useGetProductsQuery } = productApi;