import React from "react";

export const TopicFiles = ({ filenames, onFileClicked }) => {
  return (
    <div>
      {filenames.map((name, index) => {
        if (name) {
          return (
            <div key={index}>
              <a
                className="topic-filename"
                onClick={onFileClicked}
                data-index={index}
              >
                {name}
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};
