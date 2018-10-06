import React from "react";
import { TopicFiles } from "./TopicFiles";
import { Link } from "react-router-dom";

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
        <Link
          to={`/${topic.directoryName}/`}
          data-topicindex={index}
          data-topicname={topic.directoryName}
          className="topic-name"
          onClick={onTopicClicked}
        >
          {topic.directoryName}
        </Link>
        <TopicFiles
          filenames={topic.files.map(file => file.fileName)}
          onFileClicked={onFileClicked}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Link
          to={`/${topic.directoryName}/`}
          data-topicindex={index}
          data-topicname={topic.directoryName}
          className="topic-name"
          onClick={onTopicClicked}
        >
          {topic.directoryName}
        </Link>
      </div>
    );
  }
};
