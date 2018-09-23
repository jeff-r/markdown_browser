import React from "react";
import { Topic } from "./Topic";

export const Topics = ({
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
