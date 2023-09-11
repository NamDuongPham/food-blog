import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";
import { userSettingSlice } from "./slice/userSlice";
import { blogApi } from "../services/blog.service";

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(blogApi.middleware)
      .concat(userApi.middleware)
});
setupListeners(store.dispatch);
