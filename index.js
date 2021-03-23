const cors = require("cors");
const express = require("express");
const {
  calibrateMediaFiles,
} = require("./utils/mediaFileCalibrator");

const app = express();
calibrateMediaFiles();
app.use(cors());

require("./startup/routes")(app);

const portNumber = 8000;
app.listen(portNumber, function () {
  console.log(`Listening on port ${portNumber}!`);
});
