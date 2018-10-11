import { ADD_FILENAME, ADD_FILE_CONTENT } from "../constants/ActionTypes";

function stateContainsFile(state, filename) {
  return state.filter(element => element.filename === filename)[0];
}

function files(state = [], action) {
  switch (action.type) {
    case ADD_FILENAME:
      let newObject = {
        filename: action.filename,
        type: action.fileType,
        content: null
      };
      if (!stateContainsFile(state, action.filename)) {
        return [...state, newObject];
      } else {
        return state;
      }

    case ADD_FILE_CONTENT:
      return state.map(fileElement => {
        if (fileElement.filename === action.filename) {
          fileElement.content = action.content;
          if (fileElement.type === "directory") {
            fileElement.content = "directory";
          } else {
            fileElement.content = action.content;
          }
        }
        return fileElement;
      });
    default:
      return state;
  }
}

export default files;
