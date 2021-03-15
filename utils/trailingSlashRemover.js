function removeTrailingSlashInPath(path) {
  const len = path.length;
  if(path[len - 1] === "/") {
    path = path.slice(0, len - 1);
  }

  return path;
}

module.exports = removeTrailingSlashInPath;