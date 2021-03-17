const {
  allProvidedMovieFilesAndFolders: allMovies,
} = require("./mediaFileCalibrator");
const {
  allProvidedPhotoFilesAndFolders: allPhotos,
} = require("./mediaFileCalibrator");

checkAccessibilityOfMovie = (requestedPath) => {
  for (let i = 0; i < allMovies.length; i++) {
    // console.log(requestedPath, allMovies[i].path);
    if (requestedPath.startsWith(allMovies[i].path)) {
      return true;
    }
  }

  return false;
};

checkAccessibilityOfPhoto = (requestedPath) => {
  for (let i = 0; i < allPhotos.length; i++) {
    // console.log(requestedPath, allPhotos[i].path);
    if (requestedPath.startsWith(allPhotos[i].path)) {
      return true;
    }
  }

  return false;
};

checkAccessibility = (requestedPath, type) => {
  if (type === "movie") {
    return checkAccessibilityOfMovie(requestedPath);
  } else if (type === "photo") {
    return checkAccessibilityOfPhoto(requestedPath);
  } else if (type === "music") {
  }
};

module.exports.checkAccessibility = checkAccessibility;
