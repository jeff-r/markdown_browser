import React from "react";
import Marked from "marked";
import RenderedFileContent from "./RenderedFileContent";

export const File = ({ file, onEditClicked }) => {
  const { fileName, content } = file;
  let renderedContent = Marked(content);

  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{fileName}</div>
        <div className="actions">
          Edit | <a onClick={onEditClicked}>New</a>
        </div>
      </div>
      <RenderedFileContent content={renderedContent} />
    </div>
  );
};
