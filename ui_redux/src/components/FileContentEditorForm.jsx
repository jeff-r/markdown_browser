import React from "react";
import { updateFileContent } from "../api/fetchPath";

class FileContentEditorForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    updateFileContent(this.props.filename, this.props.content);
  };

  render() {
    const { content, handleContentChanged } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea
              autoFocus
              value={content}
              onChange={handleContentChanged}
            />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default FileContentEditorForm;
