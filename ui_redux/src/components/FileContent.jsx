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
    <div className="filecontent">
      {renderNodes(safeContent, markdownOptions)}
    </div>
  );
};
