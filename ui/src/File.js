import React from "react";
import Marked from "marked";
import RenderedFileContent from "./RenderedFileContent";

export const File = ({ file, onEditClicked }) => {
  const { fileName, content } = file;
  let renderedContent = "";
  if (content) renderedContent = Marked(content);

  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{fileName}</div>
        <div className="actions">
          <a className="link" onClick={onEditClicked}>
            Edit
          </a>
        </div>
      </div>
      <RenderedFileContent content={renderedContent} />
    </div>
  );
};
