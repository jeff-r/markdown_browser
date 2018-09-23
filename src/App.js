import React, { Component } from "react";
import "./App.css";

const Topics = ({
  topics,
  currentTopicIndex,
  onTopicClicked,
  onFileClicked
}) => (
  <div className="topics">
    {topics.map((topic, index) => {
      return (
        <Topic
          index={index}
          key={topic.directoryName}
          topic={topic}
          active={currentTopicIndex == index}
          onTopicClicked={onTopicClicked}
          onFileClicked={onFileClicked}
        />
      );
    })}
  </div>
);

const Topic = ({ index, topic, active, onTopicClicked, onFileClicked }) => {
  if (active) {
    return (
      <div className="active">
        <a
          data-topicindex={index}
          className="topic-name"
          onClick={onTopicClicked}
        >
          {topic.directoryName}
        </a>
        <TopicFiles
          filenames={topic.files.map(file => file.fileName)}
          onFileClicked={onFileClicked}
        />
      </div>
    );
  } else {
    return (
      <div>
        <a
          data-topicindex={index}
          className="topic-name"
          onClick={onTopicClicked}
        >
          {topic.directoryName}
        </a>
      </div>
    );
  }
};

const TopicFiles = ({ filenames, onFileClicked }) => {
  return (
    <div>
      {filenames.map((name, index) => (
        <div
          key={name}
          className="topic-filename"
          onClick={onFileClicked}
          data-index={index}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

const File = ({ file }) => {
  const { fileName, content } = file;
  return (
    <div className="file-content">
      <div className="content-header">
        <div className="file-name">{fileName}</div>
        <div className="actions">Edit | New</div>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

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
