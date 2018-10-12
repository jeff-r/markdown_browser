import React from "react";
import { updateFileContent } from "../api/fetchPath";
import { connect } from "react-redux";
import { addFileContent } from "../actions/index";

class FileContentEditorForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const filename = this.props.ownProps.filename;
    const content = this.props.ownProps.content;
    this.props.addContent(filename, content);
    updateFileContent(filename, content);
  };

  render() {
    const { content, handleContentChanged } = this.props.ownProps;
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

function mapStateToProps(state, ownProps) {
  return {
    ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addContent: (filename, content) => {
      dispatch(addFileContent(filename, content));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContentEditorForm);

// export default FileContentEditorForm;
