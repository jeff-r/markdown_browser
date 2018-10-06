import React from "react";
import { Topic } from "./Topic";

export const Topics = ({
  topics,
  currentTopicName,
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
          active={currentTopicName === topic.directoryName}
          onTopicClicked={onTopicClicked}
          onFileClicked={onFileClicked}
        />
      );
    })}
  </div>
);
