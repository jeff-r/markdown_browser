import { TOGGLE_EDITING } from "../constants/ActionTypes";

const initialState = {
  editing: false
};

function ui_state(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDITING:
      return { ...state, editing: !state.editing };

    default:
      return state;
  }
}

export default ui_state;
