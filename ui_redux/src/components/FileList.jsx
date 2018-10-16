import React from "react";
import { FileListItem } from "./FileListItem";
import { fetchFileContent, fetchPath } from "../api/fetchPath";
import { connect } from "react-redux";
import { addFilename, addFileContent } from "../actions";

class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFileList: true
    };
  }

  componentWillUpdate(nextProps) {
    this.updateContentIfNeeded(nextProps.uiState.currentFileIndex);
  }

  updateContent = file => {
    let { addFilename, addFileContent, fetchContent, dispatch } = this.props;
    let filename = file.filename;

    if (file.type === "file") {
      fetchContent(filename, (filename, content) =>
        dispatch(addFileContent(filename, content))
      );
    } else {
      fetchPath(filename + "/", (filename, type) => {
        dispatch(addFilename(filename, type));
        dispatch(addFileContent(file.filename, "fetched"));
      });
    }
  };

  updateContentIfNeeded = filename => {
    let file = this.props.files[this.props.uiState.currentFileIndex];
    if (file && file.content === null) {
      this.updateContent(file);
    }
  };

  topFiles = () => {
    return this.props.files.sort((a, b) => a.filename > b.filename);
  };

  onListDisplayLinkClicked = () => {
    this.setState({ showFileList: !this.state.showFileList });
  };

  render() {
    let displayLinkClass = this.state.showFileList
      ? "show-file-list"
      : "hide-file-list";

    let displayLinkText = this.state.showFileList ? "<<" : ">>";

    return (
      <div className="file-list">
        <div>
          <button
            className="toggle-visibility-link"
            onClick={this.onListDisplayLinkClicked}
          >
            {displayLinkText}
          </button>
        </div>
        <div className={displayLinkClass}>
          {this.topFiles().map(file => (
            <FileListItem key={file.filename} file={file} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.files,
    uiState: state.uiState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFilename: (filename, fileType) =>
      dispatch(addFilename(filename, fileType)),
    fetchContent: filename =>
      fetchFileContent(filename, (filename, content) =>
        dispatch(addFileContent(filename, content))
      )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileList);
