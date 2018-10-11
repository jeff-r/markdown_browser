import React from "react";
import { connect } from "react-redux";
import { addFilename, addFileContent } from "../actions";
import { fetchPath, fetchFileContent } from "../api/fetchPath";
import { FileList } from "../components/FileList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FileContent } from "../components/FileContent";

class Notes extends React.Component {
  componentDidMount() {
    fetchPath("/", (filename, type) =>
      this.props.dispatch(addFilename(filename, type))
    );
  }

  fileFromName = filename => {
    let file = this.props.files.filter(file => file.filename === filename)[0];

    return file;
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            render={props => {
              const currentFilename = props.location.pathname;

              return (
                <div className="notes">
                  <FileList
                    files={this.props.files}
                    currentFilename={currentFilename}
                    fetchFileContent={fetchFileContent}
                    addFileContent={addFileContent}
                    addFilename={addFilename}
                    fileFromName={this.fileFromName}
                    dispatch={this.props.dispatch}
                  />
                  <FileContent
                    file={this.fileFromName(currentFilename) || { content: "" }}
                  />
                </div>
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
