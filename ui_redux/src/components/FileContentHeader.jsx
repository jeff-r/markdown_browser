import React from "react";

export const FileContentHeader = ({ editing, file, toggleEditing }) => {
  const actionText = editing ? "Browse" : "Edit";
  return (
    <div className="content-header">
      <div className="file-name">{file.filename}</div>
      <div className="actions">
        <a className="link" onClick={toggleEditing}>
          {actionText}
        </a>
      </div>
    </div>
  );
};
