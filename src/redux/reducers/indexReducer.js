import counter from "./reducer";
import loggerReducers from "./loggerReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  counter,
  loggerReducers,
});

export default rootReducers;
