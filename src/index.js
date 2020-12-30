import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from '.store/store.js';
import {Provider} from 'react-redux';
import handleSearchChange from '../actions/search.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleSearchChange('redux  tutorials') (store.dispatch)
);

// <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,