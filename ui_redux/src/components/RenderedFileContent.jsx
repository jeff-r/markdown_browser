import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";

const RenderedFileContent = props => {
  let file = props.file;
  let safeContent;
  if (file) {
    safeContent = file.content || "";
  } else {
    safeContent = "";
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
