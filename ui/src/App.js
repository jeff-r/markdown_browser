import React, { Component } from "react";
import "./App.css";
import { Topics } from "./Topics";
import { File } from "./File";
import FileEditor from "./FileEditor";

class App extends Component {
  constructor(props) {
    super(props);

    let topics = props.topics || [];

    this.state = {
      loading: true,
      editing: false,
      currentFileName: "",
      currentFileIndex: 0,
      currentTopicIndex: 2,
      topics: topics
    };
  }

  apiUrl = () => "http://localhost:4000/";

  fetchDirectories = () => {
    fetch(this.apiUrl())
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, topics: data.filenames });
      });
  };

  updateFileContent = (filename, content) => {
    console.log("this.updateFileContent");

    let body = JSON.stringify({ filename: filename, content: content });
    console.log(body);
    console.log(filename);

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
    this.setState({ currentTopicIndex: event.target.dataset.topicindex });
  };

  handleFileClicked = event => {
    this.setState({
      currentFileIndex: event.target.dataset.index,
      currentFileName: event.target.dataset.filename
    });
  };

  currentFile = () => {
    const { currentFileIndex, currentTopicIndex } = this.state;
    const numberOfFiles = this.state.topics[currentTopicIndex].files.length;
    let index = currentFileIndex;
    if (index >= numberOfFiles) {
      index = 0;
      this.setState({ currentFileIndex: index });
    }
    return this.state.topics[currentTopicIndex].files[index];
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

  render() {
    const { editing, loading, currentTopicIndex } = this.state;

    if (loading) {
      return <p>Loading ...</p>;
    } else if (editing) {
      return (
        <FileEditor
          file={this.currentFile()}
          handleSubmit={this.handleContentChanged}
        />
      );
    } else {
      return (
        <div className="container">
          <Topics
            topics={this.state.topics}
            currentTopicIndex={currentTopicIndex}
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
