const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client');
const PUBLIC_DIR = path.resolve(APP_DIR, 'public');
const DIST_DIR = path.resolve(PUBLIC_DIR, 'dist');

const client = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: DIST_DIR + '/bundle.js',
    publicPath: PUBLIC_DIR
  },
  module: {
    loaders: [{
      test: /\.js?/,
      include: APP_DIR,
      loaders: ['eslint', 'babel']
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap'
      )
    }]
  },
  plugins: [
    new ExtractTextPlugin(DIST_DIR + '/bundle.css')
  ]
};

module.exports = client;
