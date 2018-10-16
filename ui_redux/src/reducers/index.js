import { combineReducers } from "redux";

import files from "./files";
import ui_state from "./ui_state";

const rootReducer = combineReducers({
  files,
  ui_state
});

export default rootReducer;
