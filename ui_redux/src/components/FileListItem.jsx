import React from "react";
import { Link } from "react-router-dom";
import { displayName } from "../helpers/displayName";

export class FileListItem extends React.Component {
  depth(filename) {
    return filename.split("/").length - 2;
  }

  render() {
    const filename = this.props.file.filename;
    const safeFilename = filename.replace(/\/\/*/, "/");

    return (
      <div className={"depth-" + this.depth(safeFilename)}>
        <Link to={safeFilename}>{displayName(safeFilename, 2)}</Link>
      </div>
    );
  }
}
