import { displayName } from "./displayName";

describe("displayName", () => {
  test("strips leading directories", () => {
    expect(displayName("/notes/foo.md", 2)).toEqual("foo.md");
  });

  test("strips leading directories", () => {
    expect(displayName("/aaa/bbb/foo.md", 2)).toEqual("bbb/foo.md");
  });

  test("returns top-level file or directory", () => {
    expect(displayName("/foo.md", 2)).toEqual("foo.md");
  });

  test("returns the path", () => {
    expect(displayName("/aaa/bbb/foo.md", 0)).toEqual("/aaa/bbb/foo.md");
  });
});
