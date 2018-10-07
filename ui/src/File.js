import React from "react";
import { renderNodes } from "simple-commonmark-react";

import { createElement } from "react";
import { Link } from "react-router-dom";
import LinkRenderer from "simple-commonmark-react/dist/renderers/LinkRenderer";

export default class ReactRouterLinkRenderer extends LinkRenderer {
  renderNodeWithProps(props) {
    const url = props.href;
    delete props.href;
    props.to = url;
    return createElement(Link, props, []);
  }
}

export const File = ({ file, onEditClicked }) => {
  const { fileName, content } = file;
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
      <div>{renderNodes(content, markdownOptions)}</div>
    </div>
  );
};
