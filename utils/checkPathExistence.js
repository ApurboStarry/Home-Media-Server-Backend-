const fs = require("fs");
const fsPromises = fs.promises;

async function doesPathExists(filePath) {
  let isFile = false;
  try {
    const stats = await fsPromises.stat(filePath);
    isFile = stats.isFile();
  } catch(e) {
    return false;
  }

  if(isFile) {
    // console.log("File exists");
    return true;
  } else {
    try {
      const files = await fsPromises.readdir(filePath);
      // console.log("Directory exists");
      // files.forEach(file => {
      //   console.log(file);
      // });

      return true;
    } catch(e) {
      return false;
    }
  }

}

module.exports.doesPathExists = doesPathExists;