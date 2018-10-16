import React from "react";
import { connect } from "react-redux";
import { fetchPath, fetchFileContent } from "../api/fetchPath";
import FileList from "../components/FileList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FileContent from "../components/FileContent";
import { addFilename, addFileContent, setCurrentFileIndex } from "../actions";

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingIndex: false
    };
  }
  componentDidMount() {
    this.props.fetchNames("/");
  }

  queueSetIndex = filename =>
    setTimeout(() => {
      this.setIndexAndFetchContent(filename);
    }, 1);

  setIndexAndFetchContent = filename => {
    if (!this.props.files) return;

    const newIndex = this.props.files.findIndex(
      file => file.filename === filename
    );

    if (newIndex !== this.props.uiState.currentFileIndex) {
      const file = this.props.files[newIndex];
      if (file && !file.content) {
        this.props.setCurrentFileIndex(newIndex);
        this.props.fetchContent(filename);
      }
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            render={props => {
              this.queueSetIndex(props.location.pathname);
              return (
                <div className="container">
                  <FileList />
                  <FileContent
                    file={
                      this.props.files[this.props.uiState.currentFileIndex] || {
                        content: ""
                      }
                    }
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

function mapStateToProps(state, ownProps) {
  return {
    files: state.files,
    uiState: state.uiState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNames: path =>
      fetchPath(path, (filename, type) =>
        dispatch(addFilename(filename, type))
      ),
    fetchContent: filename =>
      fetchFileContent(filename, (filename, content) => {
        dispatch(addFileContent(filename, content));
        if (content === "directory") {
          fetchPath(filename, (filename, type) =>
            dispatch(addFilename(filename, type))
          );
        }
      }),
    setCurrentFileIndex: index => dispatch(setCurrentFileIndex(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
