const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const fsPromises = fs.promises;
const {
  allProvidedPhotoFilesAndFolders,
} = require("../utils/mediaFileCalibrator");
const { addTypeToPaths } = require("../utils/typeAdderToPaths");
const removeTrailingSlashInPath = require("../utils/trailingSlashRemover");
const { checkAccessibility } = require("../utils/pathAccessChecker");
const { doesPathExists } = require("../utils/checkPathExistence");

router.get("/", async (req, res) => {
  let filePath = req.query.filePath;

  if (filePath === "") {
    return res.send(allProvidedPhotoFilesAndFolders);
  }

  const isValidPath = await doesPathExists(filePath);

  if (!isValidPath) {
    return res.status(400).send("No such file or directory exists");
  }

  filePath = removeTrailingSlashInPath(filePath);
  const canBeAccessed = checkAccessibility(filePath, "photo");

  if (!canBeAccessed) {
    return res.status(403).send("Access Forbidden");
  }

  const stats = await fsPromises.stat(filePath);

  if (stats.isFile()) {
    const supportedExtensions = [".jpg", ".JPG", ".png", ".jpeg", ".svg"];
    const extension = path.extname(filePath);

    if (supportedExtensions.indexOf(extension) < 0) {
      return res.status(400).send("File not supported for showing image");
    }

    return res.sendFile(filePath);
  } else {
    fs.readdir(filePath, async (err, files) => {
      if (err) {
        console.log("Error while reading directory");
      } else {
        files = files.map((file) => {
          return filePath + "/" + file;
        });

        files = await addTypeToPaths(files);
        res.send(files);
      }
    });
  }
});

module.exports = router;
