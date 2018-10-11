import React from "react";
import { Link } from "react-router-dom";

export class FileListItem extends React.Component {
  depth(filename) {
    return filename.split("/").length - 2;
  }

  displayName(filename, depthToRemove) {
    let pathArray = filename.split("/");
    pathArray.slice(1); // Remove leading slash

    if (pathArray.length > 1) pathArray = pathArray.slice(depthToRemove);
    return pathArray.join("/");
  }

  render() {
    const filename = this.props.file.filename;

    return (
      <div className={"depth-" + this.depth(filename)}>
        <Link to={filename}>{this.displayName(filename, 1)}</Link>
      </div>
    );
  }
}
