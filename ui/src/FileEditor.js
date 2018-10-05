import React from "react";
import Marked from "marked";
import RenderedFileContent from "./RenderedFileContent";

const EditorPane = props => {
  const { content, handleContentChanged, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea value={content} onChange={handleContentChanged} />
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

  renderedContent = () => Marked(this.state.content);

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
          <RenderedFileContent content={this.renderedContent()} />
        </div>
      </div>
    );
  }
}

export default FileEditor;
