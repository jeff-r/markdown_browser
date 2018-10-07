import React from "react";
import { Topic } from "./Topic";

export const Topics = ({
  topics,
  currentTopicName,
  currentFileName,
  onTopicClicked,
  onFileClicked
}) => (
  <div className="topics">
    {topics.filter(topic => topic.directoryName).map((topic, index) => {
      return (
        <Topic
          index={index}
          key={index}
          topic={topic}
          currentFileName={currentFileName}
          active={currentTopicName === topic.directoryName}
          onTopicClicked={onTopicClicked}
          onFileClicked={onFileClicked}
        />
      );
    })}
  </div>
);
