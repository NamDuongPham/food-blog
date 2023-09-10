import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";
import { userSettingSlice } from "./slice/userSlice";
import { typeFoodApi } from "../services/typeFoodService";
import { popularApi } from "../services/popularService";

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [typeFoodApi.reducerPath]: typeFoodApi.reducer,
    [popularApi.reducerPath]: popularApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(typeFoodApi.middleware)
      .concat(popularApi.middleware),
});
setupListeners(store.dispatch);
