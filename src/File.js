import React from "react";

export const File = ({ file }) => {
  const { fileName, content } = file;
  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{fileName}</div>
        <div className="actions">Edit | New</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};
