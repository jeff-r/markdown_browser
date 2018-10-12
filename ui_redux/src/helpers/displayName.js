export function displayName(path, depthToRemove) {
  let pathArray = path.split("/");

  if (pathArray.length === 2) return pathArray[1];
  if (pathArray.length > 2) return pathArray.slice(depthToRemove).join("/");
}
