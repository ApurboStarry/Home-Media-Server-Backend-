# IMPORTANT: The repository of the frontend of this project is [here](https://github.com/ApurboStarry/Home-Media-Server-Frontend-)

# What it does?
This is LAN media server whose contents can be accessed by any device on the LAN.

For example, you have a device(e.g. PC, Laptop) that has movies, photos etc which you want to access from your other devices(e.g. TV, Phone). There are several way of doing so. You can copy the files, cast to the desired device and many more. But these are not practical and convenient solutions always.

Let's imagine, you have a 4K movie stored in your PC or Laptop whose size is around 6 GB. If you want to access this movie from another device, you have to copy the movie file to that device which will take around 5 minutes. Or you can cast from the device where the movie file is located to the device from where the movie will be accessed. But this is also not convenient for several reasons.

That's when this **Home Media Server** comes into the picture. You can access any movie, any photo from any device on the LAN which are stored in your PC or Laptop with least latency. This app streams videos so efficiently that you won't feel any difference.

# How to run it?
1. You must have [node.js](https://nodejs.org/en/) installed on your system.
2. Download all the files from this repository
3. In the terminal run: `npm init`
4. Edit the file named *mediaFiles.json*. Add the movies and photos you want to access.
5. In the terminal run: `npm start`
6. The above command will start the server if no error occurs and print the ip address of the server in the very last line in the console.
7. That's it. Copy the IP address and follow the instructions on the [Frontend](https://github.com/ApurboStarry/Home-Media-Server-Frontend-) repository of this app. Enjoy!
8. If any error occurs, that might be because the port 8000 is already occupied. So, try running on a different port and hopefully that will work.

# How it works?
1. First of all this is a simple web server with several API endpoints. Nothing fancy in any of the endpoints except the **/x-video** endpoint which streams video.
2. The **/x-video** endpoint streams video efficiently to the client. The whole video file is not sent at once. Rather it uses [HTTP 206](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206) to partially send the contents to the client. Contents are sent on-demand and 1 MB each time. This is technology that YouTube uses to stream videos.


### Sources: 
a. [Hussein Nasser](https://www.youtube.com/watch?v=1-KmLc0c2sk)

b. [Dev.to](https://dev.to/abdisalan_js/how-to-code-a-video-streaming-server-using-nodejs-2o0)