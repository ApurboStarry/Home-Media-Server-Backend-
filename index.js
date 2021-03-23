const cors = require("cors");
const express = require("express");
const ip = require("ip");
const {
  calibrateMediaFiles,
} = require("./utils/mediaFileCalibrator");

const app = express();
calibrateMediaFiles();
app.use(cors());

require("./startup/routes")(app);

const portNumber = 8000;
app.listen(portNumber, function () {
  console.log(`Server is running on http://${ip.address() + ":" + portNumber}`);
});
