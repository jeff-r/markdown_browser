import React from "react";
import FileContentEditor from "./FileContentEditor";
import RenderedFileContent from "./RenderedFileContent";

export const FileContentDisplay = ({ editing, file }) => {
  if (editing) {
    return <FileContentEditor file={file} />;
  } else {
    return <RenderedFileContent file={file} />;
  }
};
