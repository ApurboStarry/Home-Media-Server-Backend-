const fs = require("fs");
const path = require("path");
const removeTrailingSlashInPath = require("./trailingSlashRemover");

const filePath = path.join(__dirname, "..", "mediaFiles.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

let movies = [];
let photos = [];
let musics = [];

calibrateMovies = () => {
  let moviesIndex = 0;
  for (let i = 0; i < obj.movies.length; i++) {
    let isFile = false;
    try {
      const stats = fs.statSync(obj.movies[i]);
      isFile = stats.isFile();
    } catch (e) {
      console.log("-> No such file or directory like: ", obj.movies[i]);
      continue;
    }

    movies.push({ path: obj.movies[i] });

    // remove trailing slash("/") if there is any in a path
    movies[moviesIndex].path = removeTrailingSlashInPath(obj.movies[i]);

    if (isFile) {
      movies[moviesIndex].type = "file";
    } else {
      movies[moviesIndex].type = "directory";
    }

    moviesIndex++;
  }
}

calibratePhotos = () => {
  let photosIndex = 0;
  for (let i = 0; i < obj.photos.length; i++) {
    let isFile = false;
    try {
      const stats = fs.statSync(obj.photos[i]);
      isFile = stats.isFile();
    } catch (e) {
      console.log("-> No such file or directory like: ", obj.photos[i]);
      continue;
    }

    photos.push({ path: obj.photos[i] });

    // remove trailing slash("/") if there is any in a path
    photos[photosIndex].path = removeTrailingSlashInPath(obj.photos[i]);

    if (isFile) {
      photos[photosIndex].type = "file";
    } else {
      photos[photosIndex].type = "directory";
    }

    photosIndex++;
  }

  // console.log(photos);
}

function calibrateMediaFiles() {
  calibrateMovies();
  calibratePhotos();
}

module.exports.calibrateMediaFiles = calibrateMediaFiles;
module.exports.allProvidedMovieFilesAndFolders = movies;
module.exports.allProvidedPhotoFilesAndFolders = photos;
module.exports.allProvidedMusicFilesAndFolders = musics;