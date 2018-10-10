import React from "react";
import { connect } from "react-redux";
import { addFilename, addFileContent } from "../actions";
import { fetchPath, fetchFileContent } from "../api/fetchPath";
import { FileList } from "../components/FileList";

class Notes extends React.Component {
  componentDidMount() {
    fetchPath("/", (filename, type) =>
      this.props.dispatch(addFilename(filename, type))
    );
  }

  render() {
    return (
      <FileList
        files={this.props.files}
        fetchFileContent={fetchFileContent}
        addFileContent={addFileContent}
        dispatch={this.props.dispatch}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

export default connect(mapStateToProps)(Notes);
