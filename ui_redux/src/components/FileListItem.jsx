import React from "react";
import { Link } from "react-router-dom";
import { displayName } from "../helpers/displayName";

export class FileListItem extends React.Component {
  depth(filename) {
    return filename.split("/").length - 2;
  }

  render() {
    const filename = this.props.file.filename;

    return (
      <div className={"depth-" + this.depth(filename)}>
        <Link to={filename}>{displayName(filename, 2)}</Link>
      </div>
    );
  }
}
