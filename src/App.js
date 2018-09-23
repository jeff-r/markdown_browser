import React, { Component } from "react";
import "./App.css";

const Topics = ({ topics, currentTopicIndex }) => (
  <div className="topics">
    {topics.map((topic, index) => {
      return (
        <Topic
          key={topic.directoryName}
          topic={topic}
          active={currentTopicIndex == index}
        />
      );
    })}
  </div>
);

const Topic = ({ topic, active }) => {
  if (active) {
    return (
      <div>
        <b>{topic.directoryName}</b>
        <TopicFiles filenames={topic.files.map(file => file.fileName)} />
      </div>
    );
  } else {
    return <div>{topic.directoryName}</div>;
  }
};

const TopicFiles = ({ filenames }) => {
  return (
    <div>
      {filenames.map(name => (
        <div className="topic-filename">{name}</div>
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
        />
        <File file={this.currentFile()} />
      </div>
    );
  }
}

export default App;
