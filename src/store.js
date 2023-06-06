// CORE
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
// API
import * as api from "./api/config";
// REDUCERS
import { themeReducer } from "./feature/theme/theme-slice";
import { controlsReducer } from "./feature/controls/controls-slice";
import { countryReducer } from "./feature/countries/countries-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    controls: controlsReducer,
    countries: countryReducer,
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
