const fs = require("fs");
const path = require("path");
const removeTrailingSlashInPath = require("./trailingSlashRemover");

const filePath = path.join(__dirname, "..", "mediaFiles.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

let movies = [];
let photos = {};
let musics = {};

function calibrateMediaFiles() {
  let moviesIndex = 0;
  for(let i = 0; i < obj.movies.length; i++) {
    let isFile = false;
    try {
      const stats = fs.statSync(obj.movies[i].path);
      isFile = stats.isFile();
    } catch(e) {
      console.log("-> No such file or directory like: ", obj.movies[i].path);
      continue;
    }

    movies.push(obj.movies[i]);

    // remove trailing slash("/") if there is any in a path
    movies[moviesIndex].path = removeTrailingSlashInPath(obj.movies[i].path);

    if (isFile) {
      movies[moviesIndex].type = "file";
    } else {
      movies[moviesIndex].type = "directory";
    }

    moviesIndex++;
  }

  // console.log(movies);
}

module.exports.calibrateMediaFiles = calibrateMediaFiles;
module.exports.allProvidedMovieFilesAndFolders = movies;