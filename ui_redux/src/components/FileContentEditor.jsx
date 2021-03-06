import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";
import RenderedFileContent from "./RenderedFileContent";
import FileContentEditorForm from "./FileContentEditorForm";

class FileEditor extends React.Component {
  constructor(props) {
    super(props);

    const { file } = props;
    const { filename, content } = file;

    this.state = {
      content: content,
      filename: filename
    };
  }

  renderedContent = () => {
    let content = this.props.file.content;
    let safeContent = content ? content : "";
    let markdownOptions = {
      className: "markdown",
      customRenderers: { link: ReactRouterLinkRenderer }
    };
    return renderNodes(safeContent, markdownOptions);
  };

  handleContentChanged = event => {
    this.setState({
      filename: this.state.filename,
      content: event.target.value
    });
  };

  render() {
    return (
      <div className="file-editor">
        <div className="file-editor-form">
          <FileContentEditorForm
            filename={this.state.filename}
            content={this.state.content}
            handleContentChanged={this.handleContentChanged}
          />
          <RenderedFileContent content={this.state.content} />
        </div>
      </div>
    );
  }
}

export default FileEditor;
