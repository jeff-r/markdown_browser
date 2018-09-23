import React from "react";

export const TopicFiles = ({ filenames, onFileClicked }) => {
  return (
    <div>
      {filenames.map((name, index) => (
        <div key={name}>
          <a
            className="topic-filename"
            onClick={onFileClicked}
            data-index={index}
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  );
};
