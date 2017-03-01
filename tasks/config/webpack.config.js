const webpack = require('webpack');
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

  externals: {
    'classnames': true,
    'react': 'React'
  },

  module: {
    loaders: [
      // ES6/JSX for App
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Ensure 'use strict' is everywhere
      {
        test: /\.(jsx?|es6)$/,
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
    extensions: ['.js', '.jsx', '.es6']
  },

  devtool: 'source-map'
};
