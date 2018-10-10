export function fetchPath(path, addFilename) {
  const url = "http://localhost:4000/path/?pathname=" + path;
  const options = {
    method: "get",
    mode: "cors"
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      json.filenames.forEach(file => {
        addFilename(file.filename, file.type);
      });
    });
}
