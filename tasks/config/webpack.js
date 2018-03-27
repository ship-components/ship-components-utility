/**
 * Webpack
 *
 * ---------------------------------------------------------------
 *
 * Module loader, JSX transform, Minification, Sourcemaps
 *
 * For usage docs see:
 *    https://github.com/webpack/grunt-webpack
 */

var path = require('path');

module.exports = function(grunt) {

  /** **************************************************************************
   * Build
   */
  var buildOptions = Object.assign({}, require('./webpack.config'), {
    // Clear default plugins so we can override through grunt
    plugins: []
  });

  grunt.config.set('webpack', {

    options: buildOptions,

    dev: {
    },

    dist : {
      output: {
        filename: '[name].min.js'
      },

      optimization: {
        minimize: true
      }
    }
  });

  /** **************************************************************************
   * Development Server
   */
  var serverOptions = Object.assign({}, require('./webpack.config'), {
    plugins: [],
    entry : {
      bundle: path.resolve(__dirname, '../../examples/index.js')
    },
    output: {
      filename: 'bundle.js'
    },
    devtool: 'eval',
    externals: {
      'react': 'React'
    }
  });

  // Remove Extract Plugin. Gotta clone to prevent changing above config
  serverOptions.module = Object.assign({}, serverOptions.module);
  serverOptions.module.rules = serverOptions.module.rules.slice(0);
  serverOptions.module.rules.splice(serverOptions.module.rules.length - 1);

  grunt.loadNpmTasks('grunt-webpack');
};
