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
      console.log(topic.directoryName);
      console.log(topic);
      console.log(currentTopicName);
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
