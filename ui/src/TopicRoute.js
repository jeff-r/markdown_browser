import React from "react";
import { Topics } from "./Topics";
import { File } from "./File";
import { Route } from "react-router-dom";

export const TopicRoute = ({
  thePath,
  getFirstTopic,
  getTopicAndFile,
  topics,
  handleTopicClicked,
  handleFileClicked,
  fileFromUrl,
  handleEditFile
}) => {
  return (
    <Route
      exact
      path={thePath}
      getTopicAndFile={getTopicAndFile}
      render={({ match }) => (
        <div className="container">
          <Topics
            topics={topics}
            currentTopicName={
              match.params.topic
                ? match.params.topic
                : getFirstTopic().directoryName
            }
            onTopicClicked={handleTopicClicked}
            onFileClicked={handleFileClicked}
          />
          <File file={fileFromUrl(match.url)} onEditClicked={handleEditFile} />
        </div>
      )}
    />
  );
};
