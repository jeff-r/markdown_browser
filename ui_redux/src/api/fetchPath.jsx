export function fetchPath(path, addFilename) {
  const url = "http://localhost:4000/path/?pathname=" + path;
  const options = {
    method: "get",
    mode: "cors"
  };
  console.log("fetchPath", url);
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      json.content.forEach(file => {
        console.log("received content for", url);
        addFilename(file.filename, file.type);
      });
    });
}

export function fetchFileContent(path, addFileContent) {
  const url = "http://localhost:4000/path/?pathname=" + path;
  const options = {
    method: "get",
    mode: "cors"
  };
  console.log("fetchFileContent", url);
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log("received content for", url);
      addFileContent(path, json.content);
    });
}
