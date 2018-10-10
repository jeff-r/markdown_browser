import React from "react";
import { connect } from "react-redux";
import { addFilename } from "../actions";

class FileListItem extends React.Component {
  render() {
    return <div>{this.props.file.filename}</div>;
  }
}

class FileList extends React.Component {
  render() {
    return (
      <div>
        {this.props.files.map(file => (
          <FileListItem key={file.filename} file={file} />
        ))}
      </div>
    );
  }
}

class Notes extends React.Component {
  componentDidMount() {
    this.props.dispatch(addFilename("bbbb.md", "file"));
  }

  render() {
    console.log(this.props.dispatch);
    return <FileList files={this.props.files} />;
  }
}

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

export default connect(mapStateToProps)(Notes);
