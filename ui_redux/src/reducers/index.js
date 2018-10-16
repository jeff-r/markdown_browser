import { combineReducers } from "redux";

import files from "./files";
import uiState from "./uiState";

const rootReducer = combineReducers({
  files,
  uiState
});

export default rootReducer;
