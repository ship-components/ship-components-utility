const path = require('path');

module.exports = {
  // Where to start
  entry: path.resolve(__dirname, '../../src/index.js'),

  // Where to output
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      // ES6
      {
        test: /\.(js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Ensure 'use strict' is everywhere
      {
        test: /\.(js|es6)$/,
        exclude: /node_modules/,
        loader: 'strict-loader'
      }
    ]
  },

  stats: {
    children: false,
    colors: true,
    modules: false,
    reasons: true
  },

  resolve: {
    extensions: ['.js', '.es6']
  },

  devtool: 'source-map',
  mode: 'development'
};
