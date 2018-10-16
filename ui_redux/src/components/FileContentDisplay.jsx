import React from "react";
import FileContentEditor from "./FileContentEditor";
import RenderedFileContent from "./RenderedFileContent";
import { connect } from "react-redux";

const FileContentDisplay = props => {
  if (props.editing) {
    return <FileContentEditor file={props.file} />;
  } else {
    return <RenderedFileContent file={props.file} />;
  }
};

function mapStateToProps(state, ownProps) {
  return {
    editing: state.uiState.editing,
    file: ownProps.file
  };
}

export default connect(mapStateToProps)(FileContentDisplay);
