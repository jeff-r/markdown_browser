import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";

export const FileContent = ({ file, onEditClicked }) => {
  let safeContent = file.content ? file.content : "";
  let markdownOptions = {
    className: "markdown",
    customRenderers: { link: ReactRouterLinkRenderer }
  };
  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{file.filename}</div>
        <div className="actions">
          <a className="link" onClick={onEditClicked}>
            Edit
          </a>
        </div>
      </div>
      {renderNodes(safeContent, markdownOptions)}
    </div>
  );
};
