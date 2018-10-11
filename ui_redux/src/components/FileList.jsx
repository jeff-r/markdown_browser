import React from "react";
import { FileListItem } from "./FileListItem";
import { fetchPath } from "../api/fetchPath";

export class FileList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFileList: true
    };
  }

  componentWillUpdate(nextProps) {
    this.updateContentIfNeeded(nextProps.currentFilename);
  }

  updateContent = file => {
    let {
      addFilename,
      addFileContent,
      fetchFileContent,
      dispatch
    } = this.props;
    let filename = file.filename;

    if (file.type === "file") {
      fetchFileContent(filename, (filename, content) =>
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
    let file = this.props.fileFromName(filename);
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
    let { fetchFileContent, addFileContent } = this.props;

    let displayLinkClass = this.state.showFileList
      ? "show-file-list"
      : "hide-file-list";

    let displayLinkText = this.state.showFileList ? "<<" : ">>";

    return (
      <div className="file-list">
        <div>
          <a
            className="toggle-visibility-link"
            onClick={this.onListDisplayLinkClicked}
          >
            {displayLinkText}
          </a>
        </div>
        <div className={displayLinkClass}>
          {this.topFiles().map(file => (
            <FileListItem
              key={file.filename}
              file={file}
              fetchFileContent={fetchFileContent}
              addFileContent={addFileContent}
              dispatch={this.props.dispatch}
            />
          ))}
        </div>
      </div>
    );
  }
}
