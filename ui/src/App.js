import React, { Component } from "react";
import "./App.css";
import { Topics } from "./Topics";
import { File } from "./File";
import FileEditor from "./FileEditor";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    let topics = props.topics || [];

    this.state = {
      loading: true,
      editing: false,
      currentFileName: "",
      currentTopicName: "",
      files: [],
      topics: topics
    };
  }

  apiUrl = () => "http://localhost:4000/";

  fetchDirectories = () => {
    fetch(this.apiUrl())
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          topics: data.filenames,
          files: this.getAllFiles(data.filenames)
        });
      });
  };

  updateFileContent = (filename, content) => {
    let options = {
      method: "post",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ filename: filename, content: content })
    };
    let url = this.apiUrl() + "update_file";
    fetch(url, options)
      .then(res => res.json())
      .then(res => console.log(res));
  };

  componentDidMount() {
    if (this.state.topics.length === 0) this.fetchDirectories();
  }

  handleTopicClicked = event => {
    console.log("this.handleTopicClicked");
    console.log(event.target.dataset.topicname);
    this.setState({
      currentTopicName: event.target.dataset.topicname
    });
  };

  handleFileClicked = event => {
    this.setState({
      currentFileName: event.target.dataset.filename
    });
  };

  getAllFiles = topics => {
    let files = [];
    topics.forEach(topic => {
      if (topic.files) {
        topic.files.forEach(file => files.push(file));
      }
    });
    return files;
  };

  currentFile = () => {
    let currentFile = this.state.files.filter(
      file => file.fileName === this.state.currentFileName
    );
    return currentFile[0] || this.state.files[0];
  };

  handleEditFile = event => {
    this.setState({ editing: true });
  };

  handleContentChanged = ({ filename, content }) => {
    this.updateFileContent(filename, content);

    this.setState({
      editing: false
    });

    this.fetchDirectories();
  };

  goHome = () => {
    this.setState({
      editing: false
    });
  };

  render() {
    const { editing, loading, currentTopicName } = this.state;

    if (loading) {
      return <p>Loading ...</p>;
    } else if (editing) {
      return (
        <FileEditor
          file={this.currentFile()}
          handleSubmit={this.handleContentChanged}
          goHome={this.goHome}
        />
      );
    } else {
      return (
        <div className="container">
          <Topics
            topics={this.state.topics}
            currentTopicName={currentTopicName}
            onTopicClicked={this.handleTopicClicked}
            onFileClicked={this.handleFileClicked}
          />
          <File file={this.currentFile()} onEditClicked={this.handleEditFile} />
        </div>
      );
    }
  }
}

export default App;
