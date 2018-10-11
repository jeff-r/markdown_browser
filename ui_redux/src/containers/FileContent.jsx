import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";

export const FileContent = ({ file }) => {
  let safeContent = file.content ? file.content : "";
  let markdownOptions = {
    className: "markdown",
    customRenderers: { link: ReactRouterLinkRenderer }
  };
  return (
    <div className="file-content">
      <div>********************************</div>
      <div className="content-header">
        <div className="file-name">{file.filename}</div>
      </div>
      {renderNodes(safeContent, markdownOptions)}
    </div>
  );
};
