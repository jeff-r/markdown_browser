import { ADD_FILENAME } from "../constants/ActionTypes";

export function addFilename(filename, fileType) {
  return { type: ADD_FILENAME, filename, fileType };
}
