const movies = require("../routes/movies");
const photos = require("../routes/photos");
const video = require("../routes/video");

module.exports = function (app) {
  app.use("/x-video", movies);
  app.use("/photos", photos);
  app.use("/video", video);
};
