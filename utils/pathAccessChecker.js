const { allProvidedMovieFilesAndFolders: allMovies } = require("./mediaFileCalibrator");

checkAccessibility = (requestedPath) => {
  for(let i = 0; i < allMovies.length; i++) {
    // console.log(requestedPath, allMovies[i].path);
    if(requestedPath.startsWith(allMovies[i].path)) {
      return true;
    }
  }

  return false;
}

module.exports.checkAccessibility = checkAccessibility;