import React, { Component } from "react";
import "./App.css";
import { Topics } from "./Topics";
import { File } from "./File";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFileIndex: 1,
      currentTopicIndex: 0,
      topics: [
        {
          directoryName: "jobsearch",
          files: [
            {
              fileName: "index.md",
              content: "It was a dark and stormy night"
            },
            {
              fileName: "notes.md",
              content: "Additional notes about a job or company"
            },
            {
              fileName: "resume.fodt",
              content: "Maybe placeholder text here"
            }
          ]
        },
        {
          directoryName: "cannabis",
          files: [
            {
              fileName: "index.md",
              content: "Strain notes go here"
            }
          ]
        }
      ]
    };
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
    const { currentFileIndex, currentTopicIndex } = this.state;

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

export default App;
