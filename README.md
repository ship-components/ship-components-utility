# ship-components-utility

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) set of utilities. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and an ES5 version is available using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-utility.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-utility)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-utility/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-utility)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-utility.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-utility)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-utility.svg?style=flat)](https://david-dm.org/ship-components/ship-components-utility?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/ship-components/ship-components-utility.svg)](https://greenkeeper.io/)

## Docs & Help

* [Usage](#usage)
* [Development](#development)
* [Webpack Configuration](#webpack-configuration)
* [Tests](#tests)
* [History](#history)

Here is the list of utilities you can use.

* [Collections](#collections)
  * [keys](#keys)
  * [toArray](#toarray)
  * [each](#each)
  * [size](#size)
  * [searchFn](#searchfn)
  * [any](#any)
  * [find](#find)
  * [findIndex](#findindex)
  * [getIn](#getin)
  * [hasIn](#hasin)
  * [isEqual](#isequal)
* [KeyEvents](#keyevents)
* [NativeFileUploadDialog](#nativefileuploaddialog)
* [ParseUrl](#parseurl)
* [Sort](#sort)
  * [compareDates](#comparedates)
  * [sortBy](#sortby)
  * [sortByDates](#sortbydates)
* [Strings](#strings)
  * [hash](#hash)
  * [slugify](#slugify)
  * [capitalize](#capitalize)
  * [titleCase](#titlecase)
  * [camelCase](#camelcase)
  * [toUnderscoreCase](#tounderscorecase)
  * [generateRandomString](#generaterandomstring)
  * [stringShortener](#stringshortener)
  * [stringIsValid](#stringisvalid)
  * [convertHTMLToString](#converthtmltostring)
* [Utils](#utils)
  * [objectSize](#objectsize)
  * [isObject](#isobject)
  * [isFunction](#isfunction)
  * [isString](#isstring)
  * [isArray](#isarray)
  * [isUndefined](#isundefined)
  * [bind](#bind)
  * [bindAll](#bindall)
  * [unique](#unique)
  * [mergeDeep](#mergedeep)
  * [deepCopy](#deepcopy)
  * [pluck](#pluck)
  * [isIEBrowser](#isiebrowser)
  * [detectIEVersion](#detectieversion)


## Usage

### ES6 (Recommended)
The component is written using ES6 therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
<!-- import everything -->
import * as Utility from 'ship-components-utility';

<!-- import specific library -->
import {Strings, Sort, Utils, Collections} from 'ship-components-utility';

<!-- import specific method from a library -->
import {capitalize, titleCase, toUnderscoreCase, generateRandomString} from 'ship-components-utility'.Strings;
```

## Docs
### Collections
```js
const {Collections} = require('ship-components-utility');
```

#### keys
```js
/**
 * Returns the Objects keys
 * @param  {Object} obj
 * @return {Array}  result
 */
const {keys} = require('ship-components-utility').Collections;
let obj = { name: 'test' }
expect(keys(obj)[0]).toEqual('name');
```

#### toArray
```js
/**
 * Converts an Object to an Array
 * @param  {Object} val
 * @return {Array}  result
 */
```

#### each
```js
/**
 * Iterate through each Object keys
 * And binds a callback to each keys
 * @param  {Object} val
 * @param  {func}   fn
 */
const {each} = require('ship-components-utility').Collections;
let obj = { name: 'test' };
let fn = function() {}
each(obj, fn);
```

#### size
```js
/**
 * Returns the size of an object or array
 * @param  {Object || Array} val
 * @return {Number}
 */
```

#### searchFn
```js
/**
 * Returns the function if available inside an object
 * @param  {Object || Array || Func} val
 * @return {mixed}
 */
```

#### any
```js
/**
 * Similar to Javscript .some() function
 * @param  {Object || Array}  values
 * @param  {Func}             compare
 * @return {Bool}
 */
```

#### find
```js
/**
 * Similar to  Underscore _.find() function
 * @param  {Array}  arr
 * @param  {Func}   compare
 * @param  {Mixed}  ctx (default value) optional
 * @return {Mixed}
 */
```

#### findIndex
```js
/**
 * Returns the index of an item in array if exisits, -1 otherwise
 * @param  {Array}  arr
 * @param  {Func}   compare
 * @param  {Mixed}  ctx (default value) optional
 * @return {Number} -1 if can't find it
 */
```

#### getIn
```js
/**
 * Get a nested value of an object or return
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */
const {getIn} = require('ship-components-utility').Collections;
const testMap = {
  obj1: {
    name: 'test1',
    obj2: {
      name: 'test2',
    }
  }
};
getIn(['obj1', 'obj2', 'name'], testMap); // test2
```

#### hasIn
```js
/**
 * Returns true if an object has the matched value,
 * otherwise false
 * @param  {Object}         obj
 * @param  {Array<String>}  path
 * @return {Mixed}
 */
const {hasIn} = require('ship-components-utility').Collections;
const testMap = {
  obj1: {
    name: 'test1',
    obj2: {
      name: 'test2',
    }
  }
};
hasIn(['obj1', 'obj2', 'name'], testMap); // true
```

#### isEqual
```js
/**
 * First compres the size of two objects and then does a shallow
 * comparison of the two objects values
 * @param  {Mixed} one
 * @param  {Mixed} two
 * @return {Boolean}
 */
```

### KeyEvents
```js
/**
 * List of key events
 * @param  {String} prop.Collections
 * @return {Number}
 */
const {KeyEvents} = require('ship-components-utility');
KeyEvents('DOM_VK_PAGE_DOWN'); // 34
KeyEvents('DOM_VK_ESCAPE');    // 27
```

### NativeFileUploadDialog
```js
/**
 * File upload dialog
 * @constructor param {String} type
 */
const {NativeFileUploadDialog} = require('ship-components-utility');
new NativeFileUploadDialog('image/*')
  .open
  .thenWith(callback_function)
```

### ParseUrl
```js
/**
 * Breaks a URL into parts
 * @param {String} url
 */
const {ParseUrl} = require('ship-components-utility');
let url = 'http://www.sony.com/homepage?param1=something&param2=somethingelse';
ParseUrl(url);
<!--
return value
{
  protocol: 'http'
  hostname: 'www.sony.com'
  query: 'param1=something&param2=somethingelse'
  path: '/homepage'
}
-->
```

### Sort
```js
const {Sort} = require('ship-components-utility');
```

#### compareDates
```js
/**
 * Compare two dates
 *
 * @param     {Date}    a
 * @param     {Date}    b
 * @return    {Number}
 */
const {compareDates} = require('ship-components-utility').Sort;
```

#### sortBy
```js
/**
 * Create a sorting function to sort an array of objects by prop. We accept any
 * number of arguments to sort by
 *
 * @param     {String...}    prop
 * @return    {Function}
 */
const {sortBy} = require('ship-components-utility').Sort;
```

#### sortByDates
```js
/**
 * Create a sorting function to sort an array of objects by prop. We accept any
 * number of arguments to sort by
 *
 * @param     {String...}    prop
 * @return    {Function}
 */
const {sortByDates} = require('ship-components-utility').Sort;
```

### Strings
```js
const {Strings} = require('ship-components-utility');
```

#### hash
```js
/**
 * Convert a string to a unique hash we can use as an key
 * http://stackoverflow.com/a/7616484
 * @param  {String} str
 * @return {Number}
 */
const {hash} = require('ship-components-utility').Strings;
```

#### slugify
```js
/**
 * Convert a string into something that is url and css friendly
 * @param     {String}    str
 * @return    {String}
 */
const {slugify} = require('ship-components-utility').Strings;
let str1 = 'THis Is A!   sample--string';
let str2 = 'this-is-a---sample--string';
let result = slugify(str1);

expect(result).not.toEqual(str1);
expect(result).toEqual(str2);
```

#### capitalize
```js
/**
 * Capitalize string
 * Convert to TitleCase if more than one word
 * @param     {String}    str
 * @return    {String}
 */
const {capitalize} = require('ship-components-utility').Strings;
let str1 = 'test test';
let str2 = 'Test Test';
let result = capitalize(str1);

expect(result).not.toEqual(str1);
expect(result).toEqual(str2);
```

#### titleCase
```js
/**
 * Title case string
 * @param     {String}    str
 * @return    {String}
 */
const {titleCase} = require('ship-components-utility').Strings;
```

#### camelCase
```js
/**
 * Convert to camelCase string
 * @param     {String}    str
 * @return    {String}
 */
const {camelCase} = require('ship-components-utility').Strings;
```

#### toUnderscoreCase
```js
/**
 * Convert camel case to underscore case
 * @param     {String}    str
 * @return    {String}
 */
const {toUnderscoreCase} = require('ship-components-utility').Strings;
```

#### generateRandomString
```js
/**
 * Generates a short random String
 * @param  {Number} len
 * @return {String}
 */
const {generateRandomString} = require('ship-components-utility').Strings;
```

#### stringShortener
```js
/**
 * Shorten string
 * @param     {String}    str
 * @param     {Number}    charCount [default==100]
 * @return    {String}
 */
const {stringShortener} = require('ship-components-utility').Strings;
```

#### stringIsValid
```js
/**
 * Validate strings (name, username or email)
 *
 * @param     {String}    prop [default=email]
 * @param     {String}    str
 * @return    {Bool}
 */
const {stringIsValid} = require('ship-components-utility').Strings;
```

#### convertHTMLToString
```js
/**
 * Removes HTML tags from string
 *
 * @param     {String}    str
 * @return    {String}
 */
const {convertHTMLToString} = require('ship-components-utility').Strings;
let str = '<p>this is a text for<span>testing</span></p>';
let result = convertHTMLToString(str);

expect(result).not.toEqual(str);
expect(result).toEqual('this is a text fortesting');
```

### Utils
```js
const {Utils} = require('ship-components-utility');
```

#### objectSize
```js
/**
 * Returns the size of an Object
 * @param     {Object}    obj
 * @return    {Number}    size
 */
const {objectSize} = require('ship-components-utility').Utils;
```

#### isObject
```js
/**
 * Checks if value is the language type of Object
 * will skip values === null
 * @param     {Mixed}    prop
 * @return    {Bool}
 */
const {isObject} = require('ship-components-utility').Utils;
```

#### isFunction
```js
/**
 * Checks if value is classified as a Function object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */
const {isFunction} = require('ship-components-utility').Utils;
```

#### isString
```js
/**
 * Checks if value is classified as a String primitive or object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */
const {isString} = require('ship-components-utility').Utils;
```

#### isArray
```js
/**
 * Checks if value is classified as an Array object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */
const {isArray} = require('ship-components-utility').Utils;
```

#### isUndefined
```js
/**
 * Checks if value is undefined
 * @param     {Mixed}    prop
 * @return    {Bool}
 */
const {isUndefined} = require('ship-components-utility').Utils;
```

#### bind
```js
/**
 * Bind to itself
 * @param     {args...}
 * @return    {Undefined}
 * @example   bind(this, 'handleClick', 'handleSubmit');
 */
const {bind} = require('ship-components-utility').Utils;
```

#### bindAll
```js
/**
 * Binds methods of an object to the object itself,
 * overwriting the existing method.
 * Method names may be specified as individual arguments
 * or as arrays of method names
 * @param     {Object}  obj
 * @return    {Object}  result
 */
const {bindAll} = require('ship-components-utility').Utils;
```

#### unique
```js
/**
 * Creates a duplicate-free version of an array
 * @param     {Array}         val
 * @return    {Immutable.Set}
 */
const {unique} = require('ship-components-utility').Utils;
```

#### mergeDeep
```js
/**
 * This method is like _.assign except that it
 * recursively merges own and inherited enumerable
 * string keyed properties of source objects into the
 * destination object
 * @param     {Object}      target
 * @param     {Object}      source
 * @return    {Object}      target
 */

const {mergeDeep} = require('ship-components-utility').Utils;
```

#### deepCopy
```js
/**
 * Recursive object copy
 *
 * @param     {Array<Objects> || Objects}    obj
 * @return    {Array<Objects> || Objects}
 */

const {deepCopy} = require('ship-components-utility').Utils;
```

#### pluck
```js
/**
 * Extract a subset of keys off of an object
 *
 * @param     {Object}          src
 * @return    {Array<String>}   fields
 * @return    {Object}
 */

const {pluck} = require('ship-components-utility').Utils;
```

#### isIEBrowser
```js
/**
 * Detect IE browser
 * @param  {String}     prop
 * @return {Bool}
 */
const {isIEBrowser} = require('ship-components-utility').Utils;
```

#### detectIEVersion
```js
 /**
  * Detect IE browser version
  * @return {String}
  */
const {detectIEVersion} = require('ship-components-utility').Utils;
```

## Development
More examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ git clone https://github.com/ship-components/ship-components-utility.git
$ npm install
$ npm test
```

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader --save-dev
```

Below are is a sample of how to setup the loaders:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  [...]
}
```

## Tests
1. `npm install`
2. `npm test`

## History
* 1.2.0 - Added pluck function to Util and added watch:test command
* 1.1.0 - Adds a deepCopy function to utility library to copy (recursively) objects, array of objects or date objects.
* 1.0.0 - First major version, fixed the export module path
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2017

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
