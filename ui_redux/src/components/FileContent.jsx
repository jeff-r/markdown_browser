import React from "react";
import FileContentHeader from "./FileContentHeader";
import { FileContentDisplay } from "./FileContentDisplay";

class FileContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return (
      <div className="file-content-header">
        <FileContentHeader file={this.props.file} />
        <FileContentDisplay
          editing={this.state.editing}
          file={this.props.file}
          toggleEditing={this.toggleEditing}
        />
      </div>
    );
  }
}

export default FileContent;
