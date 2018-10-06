import React, { Component } from "react";
import "./App.css";
import FileEditor from "./FileEditor";
import { TopicRoute } from "./TopicRoute";

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
    return this.fileFromUrl(this.state.currentFileName);
  };

  fileFromUrl = url => {
    if (url === "/") {
      return "";
    }
    let path = url.slice(1);
    let fileArray = this.state.files.filter(file => file.fileName === path);
    return fileArray[0] || this.state.files[0];
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

  getTopicAndFile = match => {
    let { topic, file } = match.params;
    if (
      topic !== this.state.currentTopicName ||
      file !== this.state.currentFileName
    ) {
      this.setState({
        currentFileName: file,
        currentTopicName: topic
      });
    }
  };

  getFirstTopic = () => {
    let topics = this.state.topics.filter(topic => topic.directoryName);
    return topics[0];
  };

  topicRoute = path => (
    <TopicRoute
      thePath={path}
      getFirstTopic={this.getFirstTopic}
      getTopicAndFile={this.getTopicAndFile}
      topics={this.state.topics}
      handleTopicClicked={this.handleTopicClicked}
      handleFileClicked={this.handleFileClicked}
      handleEditFile={this.handleEditFile}
      fileFromUrl={this.fileFromUrl}
    />
  );

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
        <div>
          {this.topicRoute("/")}
          {this.topicRoute("/:topic")}
          {this.topicRoute("/:topic/:file")}
        </div>
      );
    }
  }
}

export default App;
