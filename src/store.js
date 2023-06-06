// CORE
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios;";
// API
import * as api from "./api/config";
// REDUCERS
import { themeReducer } from "./feature/theme/theme-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer, 
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
