import React from "react";
import { TopicFiles } from "./TopicFiles";

export const Topic = ({
  index,
  topic,
  active,
  onTopicClicked,
  onFileClicked
}) => {
  if (active) {
    return (
      <div className="active">
        <a
          data-topicindex={index}
          data-topicname={topic.directoryName}
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
          data-topicname={topic.directoryName}
          className="topic-name"
          onClick={onTopicClicked}
        >
          {topic.directoryName}
        </a>
      </div>
    );
  }
};
