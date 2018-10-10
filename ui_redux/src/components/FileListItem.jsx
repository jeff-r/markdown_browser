import React from "react";
export class FileListItem extends React.Component {
  fetchContent = () => {
    let { addFileContent, fetchFileContent, file, dispatch } = this.props;
    let filename = file.filename;

    console.log("fetchContent");
    fetchFileContent(filename, (filename, content) =>
      dispatch(addFileContent(filename, content))
    );
  };

  render() {
    return (
      <div onClick={() => this.fetchContent()}>{this.props.file.filename}</div>
    );
  }
}
