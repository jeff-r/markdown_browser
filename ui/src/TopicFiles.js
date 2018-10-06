import React from "react";
import { Link } from "react-router-dom";

export const TopicFiles = ({ filenames, onFileClicked }) => {
  return (
    <div>
      {filenames.map((name, index) => {
        if (name) {
          return (
            <div key={index}>
              <Link
                to={`/${name}`}
                className="topic-filename"
                data-index={index}
                data-filename={name}
              >
                {name}
              </Link>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};
