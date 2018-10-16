import React from "react";
import { connect } from "react-redux";
import { toggleEditing } from "../actions/index";

const FileContentHeader = props => {
  const actionText = props.editing ? "Browse" : "Edit";
  const filename = props.ownProps.file
    ? props.ownProps.file.filename
    : "<none>";

  return (
    <div className="content-header">
      <div className="file-name">{filename}</div>
      <div className="actions">
        <button className="link" onClick={props.toggleEditing}>
          {actionText}
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    uiState: state,
    ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditing: () => dispatch(toggleEditing())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileContentHeader);
