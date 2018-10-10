import { ADD_FILENAME } from "../constants/ActionTypes";

function files(state = [], action) {
  switch (action.type) {
    case ADD_FILENAME:
      return [
        ...state,
        { filename: action.filename, type: action.fileType, content: null }
      ];
    default:
      return state;
  }
}

export default files;
