import React from "react";
import { FileListItem } from "./FileListItem";
import { fetchPath } from "../api/fetchPath";

export class FileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continue: true
    };
  }

  componentWillUpdate(nextProps) {
    if (this.state.continue) {
      setTimeout(
        () => this.updateContentIfNeeded(nextProps.currentFilename),
        2000
      );
    }
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
    } else {
    }
  };

  render() {
    let { fetchFileContent, addFileContent } = this.props;

    return (
      <div className="file-list">
        <div>
          <a onClick={() => this.setState({ continue: !this.state.continue })}>
            Halt
          </a>
        </div>
        {this.props.files.map(file => (
          <FileListItem
            key={file.filename}
            file={file}
            fetchFileContent={fetchFileContent}
            addFileContent={addFileContent}
            dispatch={this.props.dispatch}
          />
        ))}
      </div>
    );
  }
}
