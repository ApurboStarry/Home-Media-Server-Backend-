const { addTypeToPaths } = require("./utils/typeAdderToPaths");

async function test() {
  const contents = await addTypeToPaths([
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Inception (2010) [1080p]/Inception.2010.1080p.BrRip.x264.YIFY.mp4",
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Inception (2010) [1080p]/Inception.2010.1080p.BrRip.x264.YIFY.srt",
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Inception (2010) [1080p]/Other",
    "/media/apurbo/A69A97279A96F353/Procrastination/Christopher Nolan Movies/Inception (2010) [1080p]/WWW.YIFY-TORRENTS.COM.jpg",
  ]);
  console.log(contents);
}

test();
