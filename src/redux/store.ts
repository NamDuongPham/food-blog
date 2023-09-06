import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";
import { userSettingSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    [userSettingSlice.name]: userSettingSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
setupListeners(store.dispatch);
