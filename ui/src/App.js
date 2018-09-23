import React, { Component } from "react";
import "./App.css";
import { Topics } from "./Topics";
import { File } from "./File";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentFileIndex: 0,
      currentTopicIndex: 0,
      topics: []
    };
  }

  fetchDirectories = () => {
    const url = "http://localhost:4000/";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, topics: data.filenames });
      });
  };

  componentDidMount() {
    this.fetchDirectories();
  }

  handleTopicClicked = event => {
    this.setState({ currentTopicIndex: event.target.dataset.topicindex });
  };

  handleFileClicked = event => {
    this.setState({ currentFileIndex: event.target.dataset.index });
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

  render() {
    const { loading, currentFileIndex, currentTopicIndex } = this.state;

    if (loading) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div className="container">
          <Topics
            topics={this.state.topics}
            currentTopicIndex={currentTopicIndex}
            onTopicClicked={this.handleTopicClicked}
            onFileClicked={this.handleFileClicked}
          />
          <File file={this.currentFile()} />
        </div>
      );
    }
  }
}

export default App;
