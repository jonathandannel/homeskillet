import { combineReducers } from "redux";
import appReducer from "./appReducer";
import resultReducer from "./resultReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  results: resultReducer
});
