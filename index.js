const fs = require("fs");
const fsPromises = fs.promises;
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
  // Ensure there is a range given for the video
  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  // get video stats (about 61MB)
  const videoPath =
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Interstellar (2014) (2014) [1080p]/Interstellar.2014.2014.1080p.BluRay.x264.YIFY.mp4";
  const videoSize = fs.statSync(
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Interstellar (2014) (2014) [1080p]/Interstellar.2014.2014.1080p.BluRay.x264.YIFY.mp4"
  ).size;

  // Parse Range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

app.get("/xvideo", async (req, res) => {
  filePath = req.query.filePath;

  const stats = await fsPromises.stat(filePath);

  if (stats.isFile()) {
    res.send("File");
  } else {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        console.log("Error while reading directory");
      } else {
        // files.forEach((file) => {
        //   console.log(file);
        // });
        res.send(files);
      }
    });
  }

  try {
    
  } catch(e) {
    res.send("No such file or directory");
  }
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});
