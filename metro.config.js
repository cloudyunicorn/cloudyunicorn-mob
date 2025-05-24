const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');
const nodeLibs = require('node-libs-browser');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  ...nodeLibs, // Include all node-libs-browser polyfills
  stream: path.resolve(__dirname, 'node_modules/readable-stream'), // Keep readable-stream for stream
  net: path.resolve(__dirname, 'polyfills/net.js'), // Polyfill net
  tls: path.resolve(__dirname, 'polyfills/tls.js'), // Polyfill tls
  // Explicitly mock websocket-server if still needed, but nodeLibs might cover http/https
  'ws/lib/websocket-server': path.resolve(__dirname, 'polyfills/websocket-server.js'),
};
 
module.exports = withNativeWind(config, { input: './global.css' });
