import React from "react";

export const TopicFiles = ({ filenames, onFileClicked }) => {
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
