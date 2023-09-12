import { createApi } from '@reduxjs/toolkit/query/react';
import { Review } from '../types/review';
import { baseQueryWithPostService } from "./baseQuery";


export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: baseQueryWithPostService,
  endpoints: (builder) => ({
    getReviews: builder.query<Review[],void>({
      query: () => "reivews?_expand=typeFood",
    }),
    getReviewById: builder.query<Review[],number>({
      query: (typeFoodId) => `reviews?typeFoodId=${typeFoodId}`,
    }),

  }),
});

export const {useGetReviewByIdQuery,useGetReviewsQuery} = reviewApi;