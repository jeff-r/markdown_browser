import React from "react";
import Marked from "marked";
import RenderedFileContent from "./RenderedFileContent";

const EditorPane = props => {
  const { content, handleContentChanged, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={content} onChange={handleContentChanged} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

class FileEditor extends React.Component {
  constructor(props) {
    super(props);

    const { handleSubmit, file } = props;
    const { fileName, content } = file;

    this.handleSubmit = handleSubmit;

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
      <div className="fileeditor">
        <EditorPane
          content={this.state.content}
          handleContentChanged={this.handleContentChanged}
          handleSubmit={this.onSubmit}
        />
        <RenderedFileContent content={this.renderedContent()} />
      </div>
    );
  }
}

export default FileEditor;
