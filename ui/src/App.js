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
      currentFileIndex: 0,
      currentTopicIndex: 2,
      topics: topics
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
    if (this.state.topics.length === 0) this.fetchDirectories();
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
      console.log("Setting content for topic " + index);
      this.setState({ currentFileIndex: index });
    }
    return this.state.topics[currentTopicIndex].files[index];
  };

  handleEditFile = event => {
    this.setState({ editing: true });
  };

  handleContentChanged = newContent => {
    console.log(newContent);
    this.setState({
      editing: false,
      topics: this.state.topics.map((topic, index) => {
        if (index === this.state.currentFileIndex) {
          console.log("index: " + index);
          console.log(topic);
          topic.content = newContent;
        }
        return topic;
      })
    });
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
