import React from "react";
import FileContentHeader from "./FileContentHeader";
import FileContentDisplay from "./FileContentDisplay";

class FileContent extends React.Component {
  render() {
    return (
      <div className="file-content-header">
        <FileContentHeader file={this.props.file} />
        <FileContentDisplay
          file={this.props.file}
          content={this.props.file.content}
        />
      </div>
    );
  }
}

export default FileContent;
