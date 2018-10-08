import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";

export const File = ({ file, onEditClicked }) => {
  const { fileName, content } = file;
  const safeContent = content ? content : "";
  let markdownOptions = {
    className: "markdown",
    customRenderers: { link: ReactRouterLinkRenderer }
  };

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
      <div>{renderNodes(safeContent, markdownOptions)}</div>
    </div>
  );
};
