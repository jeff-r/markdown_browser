import { ADD_FILE_CONTENT, ADD_FILENAME } from "../constants/ActionTypes";

export function addFilename(filename, fileType) {
  return { type: ADD_FILENAME, filename, fileType };
}

export function addFileContent(filename, content) {
  return { type: ADD_FILE_CONTENT, filename, content };
}
