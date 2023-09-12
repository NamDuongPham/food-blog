import { createApi } from '@reduxjs/toolkit/query/react';
import { Recipe } from '../types/recipe';
import { baseQueryWithPostService } from "./baseQuery";


export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: baseQueryWithPostService,
  endpoints: (builder) => ({
    getRecipe: builder.query<Recipe[],void>({
      query: () => "recipes",
    }),
    getRecipeByFoodId: builder.query<Recipe[], number>({
        query: (typeFoodId) => `recipes?typeFoodId=${typeFoodId}`,
      }),

  }),
});

export const {useGetRecipeQuery,useGetRecipeByFoodIdQuery} = recipeApi;