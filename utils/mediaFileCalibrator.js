const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "mediaFiles.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

let movies = {...obj.movies};
let photos = {};
let musics = {};

function calibrateMediaFiles() {
  for(let i = 0; i < obj.movies.length; i++) {
    const stats = fs.statSync(obj.movies[i].path)
    const isFile = stats.isFile();

    if(isFile) {
      movies[i].type = "file";
    } else {
      movies[i].type = "directory"
    }
  }
}

module.exports.calibrateMediaFiles = calibrateMediaFiles;
module.exports.allProvidedMovieFilesAndFolders = movies;