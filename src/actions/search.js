import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';


var handleVideoSearch = (q) => {

  return _.debounce((dispatch) => {

    var options = {
      key: YOUTUBE_ API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  }, 200);

  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
