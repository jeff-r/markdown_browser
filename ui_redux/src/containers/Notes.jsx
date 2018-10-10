import React from "react";
import { connect } from "react-redux";
import { addFilename } from "../actions";
import { fetchPath } from "../api/fetchPath";

class FileListItem extends React.Component {
  render() {
    return <div>{this.props.file.filename}</div>;
  }
}

class FileList extends React.Component {
  render() {
    return (
      <div className="file-list">
        {this.props.files.map(file => (
          <FileListItem key={file.filename} file={file} />
        ))}
      </div>
    );
  }
}

class Notes extends React.Component {
  componentDidMount() {
    fetchPath("/notes/", (filename, type) =>
      this.props.dispatch(addFilename(filename, type))
    );
  }

  render() {
    return <FileList files={this.props.files} />;
  }
}

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

export default connect(mapStateToProps)(Notes);
