import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";

const RenderedFileContent = ({ file, content }) => {
  let safeContent;
  if (file) {
    safeContent = file.content || "";
  } else {
    safeContent = content || "";
  }

  let markdownOptions = {
    className: "markdown",
    customRenderers: { link: ReactRouterLinkRenderer }
  };

  return (
    <div className="file-content">
      {renderNodes(safeContent, markdownOptions)}
    </div>
  );
};

export default RenderedFileContent;
