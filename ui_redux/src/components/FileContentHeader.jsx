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
        <a className="link" onClick={props.toggleEditing}>
          {actionText}
        </a>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    ui_state: state,
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
