// metro.config.js
const {
  wrapWithAudioAPIMetroConfig,
} = require('react-native-audio-api/metro-config');

const config = {
  // Your existing Metro configuration options
};

module.exports = wrapWithAudioAPIMetroConfig(config);