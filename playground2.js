const { doesPathExists } = require("./utils/checkPathExistence");

async function test() {
  const isValid = await doesPathExists(
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Interstellar (2014) (2014) [1080p]/Interstellar.2014.2014.1080p.BluRay.x264.YIFY.mp4"
  );
  console.log(isValid);
}

test();
