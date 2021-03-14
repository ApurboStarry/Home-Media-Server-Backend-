const fs = require("fs");
const fsPromises = fs.promises

const obj = JSON.parse(fs.readFileSync("./mediaFiles.json", "utf8"));

for(let i = 0; i < obj.movies.length; i++) {
  const stats = fs.statSync(obj.movies[i].path)
  const isFile = stats.isFile();
  const isDirectory = stats.isDirectory()

  if(isFile){
    console.log("File -> " + obj.movies[i].path + "\n\n");
  }
  else if(isDirectory) {
    console.log("Directory -> " + obj.movies[i].path + "\n\n");

    fs.readdir(obj.movies[i].path, (err, files) => {
      if(err) {
        console.log("No such file or directory");
      } else {
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
  }
}
