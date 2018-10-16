import {
  TOGGLE_EDITING,
  SET_CURRENT_FILE_INDEX
} from "../constants/ActionTypes";

const initialState = {
  editing: false
};

function uiState(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return { ...state, editing: !state.editing };

    case SET_CURRENT_FILE_INDEX:
      return { ...state, currentFileIndex: action.index };

    default:
      return state;
  }
}

export default uiState;
