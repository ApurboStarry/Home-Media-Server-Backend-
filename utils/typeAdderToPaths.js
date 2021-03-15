const fs = require("fs");
const fsPromises = fs.promises;

async function addTypeToPaths(pathArray) {
  const typedPathArray = [];

  for(let i = 0; i < pathArray.length; i++) {
    try {
      const stats = await fsPromises.stat(pathArray[i]);
      const isFile = stats.isFile();

      if (isFile) {
        typedPathArray.push({ type: "file", path: pathArray[i] });
      } else {
        typedPathArray.push({ type: "directory", path: pathArray[i] });
      }
    } catch(e) {

    }
  }

  return typedPathArray;
}

module.exports.addTypeToPaths = addTypeToPaths;