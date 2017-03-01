'use strict';

const Immutable = require('immutable');

/**
 * List of utilites to use across the app
 * @param     {params}
 * @return    {Stribg}  Result
 */
const utils = {
   // Checks if value is the language type of Object
   // will skip values === null
   isObject: function(prop) {
         return prop !== null && typeof prop === 'object';
   },

   // Checks if value is classified as a Function object
   isFunction: function(prop) {
         return typeof prop === 'function';
   },

   // Checks if value is classified as a String primitive or object
   isString: function(prop) {
         return typeof prop === 'string';
   },

   // Checks if value is classified as an Array object
   isArray: function(prop) {
         return Array.isArray(prop);
   },

   // Checks if value is undefined
   isUndefined: function(prop) {
         return typeof prop === 'undefined';
   },

   // Binds methods of an object to the object itself, overwriting the existing method.
   // Method names may be specified as individual arguments or as arrays of method names
   bindAll: function(obj) {
      let result = obj;

      for (let prop in result) {
         if (result.hasOwnProperty(prop) && typeof result[prop] === 'function') {
            result[prop] = result[prop].bind(result);
            }
         }
      return result;
   },

   // Creates a duplicate-free version of an array
   unique: function(val) {
      return new Immutable.Set(val);
   },

   /**
    * Detect IE browser
    * @param  {String} prop
    * @return {Bool}
    */
  isIEBrowser(prop) {
    switch(prop) {
      case 'ie10':
        return navigator.appVersion.indexOf('MSIE 10') !== -1 && navigator.appVersion.indexOf('Trident') === -1;
      case 'ie11':
        return navigator.appVersion.indexOf('Trident') !== -1 && navigator.appVersion.indexOf('MSIE 10') === -1;
      case 'edge':
        return navigator.appVersion.indexOf('Edge') !== -1;
      // IE10 || IE11
      default:
        return navigator.appVersion.indexOf('Trident') !== -1 || navigator.appVersion.indexOf('MSIE 10') !== -1;
    }
  },

   /**
    * Detect IE browser
    * @return {String}
    */
  detectIE() {
    let ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    let msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    let trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      let rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    let edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  },

  /**
   * Bind to itself
   * @param     {args...}
   * @return    {Undefined}
   * @example   bind(this, 'handleClick', 'handleSubmit');
   */
  bind() {
    let args = Array.prototype.slice.call(arguments);
    let ctx = args.splice(0, 1)[0];
    for (let i = 0; i < args.length; i++) {
      ctx[args[i]] = ctx[args[i]].bind(ctx);
    }
  },

  // This method is like _.assign except that it recursively merges own
  // and inherited enumerable string keyed properties of source objects
  // into the destination object
  mergeDeep(target, source) {
    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          this.mergeDeep(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
};

module.exports = utils;
