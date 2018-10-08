import React from "react";
import { Link } from "react-router-dom";

export const TopicFiles = ({ filenames, currentFileName }) => {
  return (
    <div>
      {filenames.map((name, index) => {
        if (name) {
          let isActive = false;
          if (name === currentFileName) isActive = true;
          return (
            <div key={index}>
              <Link
                to={`/${name}`}
                className={`topic-filename ${isActive ? "current" : ""}`}
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
