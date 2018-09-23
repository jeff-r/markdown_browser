import React from "react";
import Marked from "marked";

export const File = ({ file }) => {
  const { fileName, content } = file;
  let renderedContent = Marked(content);
  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{fileName}</div>
        <div className="actions">Edit | New</div>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </div>
  );
};
