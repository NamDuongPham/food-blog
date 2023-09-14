import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";
import { userSettingSlice } from "./slice/userSlice";

import { typeFoodApi } from "../services/typeFoodService";
import { popularApi } from "../services/popularService";
import { recipeApi } from "../services/recipeService";
import { reviewApi } from "../services/reviewService";

import { blogApi } from "../services/blog.service";
import { productApi } from "../services/productService";


export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [typeFoodApi.reducerPath]: typeFoodApi.reducer,
    [popularApi.reducerPath]: popularApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [productApi.reducerPath]: productApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(typeFoodApi.middleware)
      .concat(popularApi.middleware)
      .concat(recipeApi.middleware)
      .concat(reviewApi.middleware)
      .concat(blogApi.middleware)
      .concat(userApi.middleware)
      .concat(productApi.middleware)

});
setupListeners(store.dispatch);
