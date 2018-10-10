import React from "react";
import { FileListItem } from "./FileListItem";

export class FileList extends React.Component {
  render() {
    let { fetchFileContent, addFileContent } = this.props;

    return (
      <div className="file-list">
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
