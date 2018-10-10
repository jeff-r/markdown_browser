import { ADD_FILENAME, ADD_FILE_CONTENT } from "../constants/ActionTypes";

function files(state = [], action) {
  switch (action.type) {
    case ADD_FILENAME:
      return [
        ...state,
        { filename: action.filename, type: action.fileType, content: null }
      ];
    case ADD_FILE_CONTENT:
      return state.map(fileElement => {
        if (fileElement.filename === action.filename)
          fileElement.content = action.content;
        return fileElement;
      });
    default:
      return state;
  }
}

export default files;
