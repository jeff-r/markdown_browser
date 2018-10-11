import React from "react";
import { renderNodes } from "simple-commonmark-react";
import ReactRouterLinkRenderer from "./ReactRouterLinkRenderer";
import RenderedFileContent from "./RenderedFileContent";

const EditorPane = props => {
  const { content, handleContentChanged, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea autoFocus value={content} onChange={handleContentChanged} />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

class FileEditor extends React.Component {
  constructor(props) {
    super(props);

    const { handleSubmit, file, goHome } = props;
    const { fileName, content } = file;

    this.handleSubmit = handleSubmit;
    this.goHome = goHome;

    this.state = {
      content: content,
      filename: fileName
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

  onSubmit = event => {
    event.preventDefault();
    this.handleSubmit({
      filename: this.state.filename,
      content: this.state.content
    });
  };

  render() {
    return (
      <div className="file-editor">
        <div className="editor-titlebar">
          <a onClick={this.goHome}>Home</a>
        </div>

        <div className="file-editor-form">
          <EditorPane
            content={this.state.content}
            handleContentChanged={this.handleContentChanged}
            handleSubmit={this.onSubmit}
          />
          <RenderedFileContent content={this.state.content} />
        </div>
      </div>
    );
  }
}

export default FileEditor;
