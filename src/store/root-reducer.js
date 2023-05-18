// CORE
import { combineReducers } from "redux";
// REDUCERS
import { themeReducer } from "./theme/theme-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
});
