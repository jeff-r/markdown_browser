import React from "react";
import { connect } from "react-redux";
import { addFilename, addFileContent } from "../actions";
import { fetchPath, fetchFileContent } from "../api/fetchPath";
import { FileList } from "../components/FileList";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Notes extends React.Component {
  componentDidMount() {
    fetchPath("/", (filename, type) =>
      this.props.dispatch(addFilename(filename, type))
    );
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            render={props => {
              // console.log(props);
              return (
                <FileList
                  files={this.props.files}
                  currentFilename={props.location.pathname}
                  fetchFileContent={fetchFileContent}
                  addFileContent={addFileContent}
                  dispatch={this.props.dispatch}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.files
  };
}

export default connect(mapStateToProps)(Notes);
