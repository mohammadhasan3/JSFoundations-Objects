/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  let videoArray = [];
  videoArray = channel.videos;
  let length = videoArray.length;
  return length;
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here

  let titleArray = channel.videos.map((video) => video.title);
  return titleArray.includes(videoTitle);
}

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  let newArray = channels.map((channelObject) => channelObject.name);

  let index = newArray.indexOf(channelName);
  return channels[index];
}

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  let titleArray = [];
  let checker = -1;
  for (let i = 0; i < channels.length; i++) {
    titleArray = channels[i].videos.map((video) => video.title);
    if (titleArray.includes(videoTitle)) {
      checker = i;
      break;
    }
  }

  return channels[checker];
}

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here
  let filteredArray = channels.filter(function (channelObject) {
    return (
      channelObject.name.includes(query) ||
      channelObject.description.includes(query)
    );
  });
  return filteredArray;
}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
