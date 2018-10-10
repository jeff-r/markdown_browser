import React from "react";
import { FileListItem } from "./FileListItem";

export class FileList extends React.Component {
  componentWillUpdate(nextProps) {
    this.updateContentIfNeeded(nextProps.currentFilename);
  }

  updateContent = file => {
    console.log("Updating  content for " + file.filename);

    let { addFileContent, fetchFileContent, dispatch } = this.props;
    let filename = file.filename;

    console.log("fetchContent");
    fetchFileContent(filename, (filename, content) =>
      dispatch(addFileContent(filename, content))
    );
  };

  updateContentIfNeeded = filename => {
    let file = this.fileFromName(filename);
    console.log(file);
    if (file && file.content === null) {
      this.updateContent(file);
    }
  };

  fileFromName = filename => {
    return this.props.files.filter(file => file.filename === filename)[0];
  };

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
