export function fetchPath(path, addFilename) {
  const url = "http://localhost:4000/path/?pathname=" + path;
  const options = {
    method: "get",
    mode: "cors"
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      json.content.forEach(file => {
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
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      addFileContent(path, json.content);
    });
}

export function updateFileContent(filename, content) {
  if (filename === null || content === null) return;
  let options = {
    method: "post",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ filename: filename, content: content })
  };
  let url = "http://localhost:4000/update_file";
  fetch(url, options)
    .then(res => res.json())
    .then(res => console.log(res));
}
