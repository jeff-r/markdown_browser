import React from "react";

const RenderedFileContent = ({ content }) => (
  <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
);

export default RenderedFileContent;
