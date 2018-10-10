import React from "react";
import { Link } from "react-router-dom";

export class FileListItem extends React.Component {
  render() {
    const filename = this.props.file.filename;

    return (
      <div>
        <Link to={filename}>{filename}</Link>
      </div>
    );
  }
}
