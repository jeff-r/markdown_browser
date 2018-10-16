import {
  ADD_FILE_CONTENT,
  ADD_FILENAME,
  TOGGLE_EDITING,
  SET_CURRENT_FILE_INDEX
} from "../constants/ActionTypes";

export function addFilename(filename, fileType) {
  return { type: ADD_FILENAME, filename, fileType };
}

export function addFileContent(filename, content) {
  // console.log("******************************************");
  // console.log("adding", filename, content);
  return { type: ADD_FILE_CONTENT, filename, content };
}

export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export function setCurrentFileIndex(index) {
  return { type: SET_CURRENT_FILE_INDEX, index: index };
}
