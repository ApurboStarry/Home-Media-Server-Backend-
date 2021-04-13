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

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/lg", (req, res) => {
	res.sendFile(
    "/media/apurbo/A69A97279A96F353/Procrastination/MCU/Captain America Civil War (2016) [1080p] [YTS.AG]/Captain.America.Civil.War.2016.1080p.BluRay.x264-[YTS.AG].mp4"
  );
});

const portNumber = 8000;
app.listen(portNumber, function () {
  console.log(`Server is running on http://${ip.address() + ":" + portNumber}`);
});
