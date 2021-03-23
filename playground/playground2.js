const { calibrateMediaFiles } = require("../utils/mediaFileCalibrator");
const { checkAccessibility } = require("../utils/pathAccessChecker");

calibrateMediaFiles();
console.log(
  checkAccessibility(
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Inception (2010) [1080p]"
  )
);