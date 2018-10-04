import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  // it("renders the file names", () => {
  //   const wrapper = render(<App topics={mockTopics} />);
  //   console.log(wrapper.text());
  //   expect(wrapper.text()).to.contain("Template");
  // });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App topics={mockTopics} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

let mockTopics = {
  filenames: [
    {
      directoryName: "resumes",
      files: [
        { fileName: "Template.odt", content: "Template.odt", type: "file" },
        { fileName: "general.html", content: "general.html", type: "file" },
        {
          fileName: "teksystems_resume.fodt",
          content: "teksystems_resume.fodt",
          type: "file"
        },
        { fileName: "general.fodt", content: "general.fodt", type: "file" }
      ]
    }
  ]
};
