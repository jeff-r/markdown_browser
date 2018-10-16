import {
  ADD_FILE_CONTENT,
  ADD_FILENAME,
  TOGGLE_EDITING
} from "../constants/ActionTypes";

export function addFilename(filename, fileType) {
  return { type: ADD_FILENAME, filename, fileType };
}

export function addFileContent(filename, content) {
  return { type: ADD_FILE_CONTENT, filename, content };
}

export function toggleEditing() {
  console.log("toggleEditing");
  return { type: TOGGLE_EDITING };
}
