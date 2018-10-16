import files from "./files";
import { addFilename, addFileContent } from "../actions/index";

describe("files reducer", () => {
  describe("ADD_FILENAME", () => {
    test("Adds a new file", () => {
      expect(files([], addFilename("aaa.md", "file"))).toEqual([
        {
          content: null,
          filename: "aaa.md",
          type: "file"
        }
      ]);
    });

    test("Doesn't add a duplicate file", () => {
      let newState = files([], addFilename("aaa.md", "file"));
      expect(files(newState, addFilename("aaa.md", "file"))).toEqual([
        {
          content: null,
          filename: "aaa.md",
          type: "file"
        }
      ]);
    });
  });

  describe("ADD_CONTENT", () => {
    test("Adds content to the file", () => {
      let newState = files([], addFilename("aaa.md", "file"));
      expect(
        files(newState, addFileContent("aaa.md", "this is the content"))
      ).toEqual([
        {
          content: "this is the content",
          filename: "aaa.md",
          type: "file"
        }
      ]);
    });

    test("Adds a placeholder for a directory", () => {
      let newState = files([], addFilename("somedir", "directory"));
      expect(files(newState, addFileContent("somedir", "anything"))).toEqual([
        {
          content: "directory",
          filename: "somedir",
          type: "directory"
        }
      ]);
    });

    test("Adds an array of files", () => {
      let state = [
        { filename: "bbb", type: "directory", content: "directory" }
      ];
      let newState = [
        { filename: "bbb", type: "directory", content: "directory" },
        { filename: "ccc.md", type: "file", content: "something" }
      ];
      expect(files(state, addFileContent("somedir", newState))).toEqual([
        { filename: "bbb", type: "directory", content: "directory" },
        { filename: "ccc.md", type: "file", content: "something" }
      ]);
    });
  });
});
