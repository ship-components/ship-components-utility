(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') {
module.exports = factory();
} else if (typeof define === 'function' && define.amd) {
define([], factory);
} else {
		var a = factory();
		for (var i in a) {
(typeof exports === 'object' ? exports : root)[i] = a[i];
}
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if (mode & 1) {
value = __webpack_require__(value);
}
/******/ 		if (mode & 8) {
return value;
}
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) {
return value;
}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value !== 'string') {
for (var key in value) {
__webpack_require__.d(ns, key, function(key) {
 return value[key];
}.bind(null, key));
}
}
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() {
 return module.default;
} :
/******/ 			function getModuleExports() {
 return module;
};
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) {
 return Object.prototype.hasOwnProperty.call(object, property);
};
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = '';
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = './src/index.js');
/******/ })
/************************************************************************/
/******/ ({

/***/ './node_modules/webpack/buildin/module.js':
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) {
module.children = [];
}
		Object.defineProperty(module, 'loaded', {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, 'id', {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ './src/KeyEvents.js':
/*!**************************!*\
  !*** ./src/KeyEvents.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'use strict';
/* WEBPACK VAR INJECTION */(function(module) {
/**
 * List of key events
 * @param  {String} prop
 * @return {Number}
 */

var _require = __webpack_require__(/*! ./utils */ './src/utils.js');


var isUndefined = _require.isUndefined;

function KeyEvents(prop) {
  // Browser detection
  var KeyEvent = !module ? window.KeyEvent : void 0;

  if (isUndefined(KeyEvent)) {
    KeyEvent = {
      DOM_VK_CANCEL: 3,
      DOM_VK_HELP: 6,
      DOM_VK_BACK_SPACE: 8,
      DOM_VK_TAB: 9,
      DOM_VK_CLEAR: 12,
      DOM_VK_RETURN: 13,
      DOM_VK_ENTER: 14,
      DOM_VK_SHIFT: 16,
      DOM_VK_CONTROL: 17,
      DOM_VK_ALT: 18,
      DOM_VK_PAUSE: 19,
      DOM_VK_CAPS_LOCK: 20,
      DOM_VK_ESCAPE: 27,
      DOM_VK_SPACE: 32,
      DOM_VK_PAGE_UP: 33,
      DOM_VK_PAGE_DOWN: 34,
      DOM_VK_END: 35,
      DOM_VK_HOME: 36,
      DOM_VK_LEFT: 37,
      DOM_VK_UP: 38,
      DOM_VK_RIGHT: 39,
      DOM_VK_DOWN: 40,
      DOM_VK_PRINTSCREEN: 44,
      DOM_VK_INSERT: 45,
      DOM_VK_DELETE: 46,
      DOM_VK_0: 48,
      DOM_VK_1: 49,
      DOM_VK_2: 50,
      DOM_VK_3: 51,
      DOM_VK_4: 52,
      DOM_VK_5: 53,
      DOM_VK_6: 54,
      DOM_VK_7: 55,
      DOM_VK_8: 56,
      DOM_VK_9: 57,
      DOM_VK_SEMICOLON: 59,
      DOM_VK_EQUALS: 61,
      DOM_VK_A: 65,
      DOM_VK_B: 66,
      DOM_VK_C: 67,
      DOM_VK_D: 68,
      DOM_VK_E: 69,
      DOM_VK_F: 70,
      DOM_VK_G: 71,
      DOM_VK_H: 72,
      DOM_VK_I: 73,
      DOM_VK_J: 74,
      DOM_VK_K: 75,
      DOM_VK_L: 76,
      DOM_VK_M: 77,
      DOM_VK_N: 78,
      DOM_VK_O: 79,
      DOM_VK_P: 80,
      DOM_VK_Q: 81,
      DOM_VK_R: 82,
      DOM_VK_S: 83,
      DOM_VK_T: 84,
      DOM_VK_U: 85,
      DOM_VK_V: 86,
      DOM_VK_W: 87,
      DOM_VK_X: 88,
      DOM_VK_Y: 89,
      DOM_VK_Z: 90,
      DOM_VK_CONTEXT_MENU: 93,
      DOM_VK_NUMPAD0: 96,
      DOM_VK_NUMPAD1: 97,
      DOM_VK_NUMPAD2: 98,
      DOM_VK_NUMPAD3: 99,
      DOM_VK_NUMPAD4: 100,
      DOM_VK_NUMPAD5: 101,
      DOM_VK_NUMPAD6: 102,
      DOM_VK_NUMPAD7: 103,
      DOM_VK_NUMPAD8: 104,
      DOM_VK_NUMPAD9: 105,
      DOM_VK_MULTIPLY: 106,
      DOM_VK_ADD: 107,
      DOM_VK_SEPARATOR: 108,
      DOM_VK_SUBTRACT: 109,
      DOM_VK_DECIMAL: 110,
      DOM_VK_DIVIDE: 111,
      DOM_VK_F1: 112,
      DOM_VK_F2: 113,
      DOM_VK_F3: 114,
      DOM_VK_F4: 115,
      DOM_VK_F5: 116,
      DOM_VK_F6: 117,
      DOM_VK_F7: 118,
      DOM_VK_F8: 119,
      DOM_VK_F9: 120,
      DOM_VK_F10: 121,
      DOM_VK_F11: 122,
      DOM_VK_F12: 123,
      DOM_VK_F13: 124,
      DOM_VK_F14: 125,
      DOM_VK_F15: 126,
      DOM_VK_F16: 127,
      DOM_VK_F17: 128,
      DOM_VK_F18: 129,
      DOM_VK_F19: 130,
      DOM_VK_F20: 131,
      DOM_VK_F21: 132,
      DOM_VK_F22: 133,
      DOM_VK_F23: 134,
      DOM_VK_F24: 135,
      DOM_VK_NUM_LOCK: 144,
      DOM_VK_SCROLL_LOCK: 145,
      DOM_VK_COMMA: 188,
      DOM_VK_PERIOD: 190,
      DOM_VK_SLASH: 191,
      DOM_VK_BACK_QUOTE: 192,
      DOM_VK_OPEN_BRACKET: 219,
      DOM_VK_BACK_SLASH: 220,
      DOM_VK_CLOSE_BRACKET: 221,
      DOM_VK_QUOTE: 222,
      DOM_VK_META: 224
    };
  }

  return prop ? KeyEvent[prop] : KeyEvent;
}

module.exports = KeyEvents;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ './node_modules/webpack/buildin/module.js')(module)));

/***/ }),

/***/ './src/NativeFileUploadDialog.js':
/*!***************************************!*\
  !*** ./src/NativeFileUploadDialog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function() {
 return NativeFileUploadDialog;
});


function _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError('Cannot call a class as a function');
}
}

function _defineProperties(target, props) {
 for (var i = 0; i < props.length; i++) {
 var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) {
descriptor.writable = true;
} Object.defineProperty(target, descriptor.key, descriptor);
}
}

function _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) {
_defineProperties(Constructor.prototype, protoProps);
} if (staticProps) {
_defineProperties(Constructor, staticProps);
} return Constructor;
}

var _require = __webpack_require__(/*! ./utils */ './src/utils.js');


var isIEBrowser = _require.isIEBrowser;
/**
 * File upload dialog
 * @constructor param {String} type
 */


var NativeFileUploadDialog =
/*#__PURE__*/
function() {
  function NativeFileUploadDialog(type) {
    _classCallCheck(this, NativeFileUploadDialog);

    this.type = type;
    this.input = document.createElement('input');

    if (this.type) {
      this.input.setAttribute('accept', this.type);
    }

    this.input.setAttribute('style', 'visibility: hidden; opacity: 0; position: absolute;');
    this.input.setAttribute('type', 'file'); // Check to see if browser is an IE10 or IE11 or edge

    this.isIE10 = isIEBrowser('ie10');
    this.isIE11 = isIEBrowser('ie11');
    this.isEdge = isIEBrowser('edge'); // onChange event listener
    // Based on browser type

    if (this.isIE10 && this.input.attachEvent) {
      // IE 10
      this.input.attachEvent('onchange', this.onChange.bind(this), false);
    } else {
      // Other browsers including IE11
      this.input.addEventListener('change', this.onChange.bind(this), false);
    }
  }
  /**
   * Allow access to the input elment for other props
   * @param {String} prop
   * @param {String} val
   */


  _createClass(NativeFileUploadDialog, [{
    key: 'setAttribute',
    value: function setAttribute(prop, val) {
      this.input.setAttribute(prop, val);
      return this;
    }
    /**
     * Alias function for types
     * @param  {String} type
     */

  }, {
    key: 'setType',
    value: function setType(type) {
      this.type = type;
      return this.setAttribute('type', type);
    }
    /**
     * Show the dialog
     */

  }, {
    key: 'open',
    value: function open() {
      if (this.type) {
        this.input.setAttribute('accept', this.type);
      }

      document.body.appendChild(this.input);
      this.input.click();
      return this;
    }
  }, {
    key: 'thenWith',
    value: function thenWith(callback) {
      this._callback = callback; // Callback needs to fire here when using IE10 or IE11
      // Reason: onChange event fires first
      // Gets the files (IF ANY), then
      // thenWith function fires

      if ((this.isIE10 || this.isIE11 || this.isEdge) && typeof this.files !== 'undefined') {
        this._callback(this.files);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.event = event; // Grab the uploaded files

      if (this.isIE10) {
        // IE10
        this.files = event.srcElement.files;
      } else {
        // Other browsers including IE11
        this.files = event.target.files;
      } // Callback fires when not using IE10 browser
      // callback is undefined for IE10 at this stage


      if (typeof this._callback === 'function') {
        this._callback(this.files);
      }

      this.input.parentNode.removeChild(this.input);
    }
  }]);

  return NativeFileUploadDialog;
}();


/***/ }),

/***/ './src/collections.js':
/*!****************************!*\
  !*** ./src/collections.js ***!
  \****************************/
/*! exports provided: getIn, keys, toArray, each, size, searchFn, any, find, findIndex, hasIn, isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'keys', function() {
 return keys;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'toArray', function() {
 return toArray;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'each', function() {
 return each;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'size', function() {
 return size;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'searchFn', function() {
 return searchFn;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'any', function() {
 return any;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'find', function() {
 return find;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'findIndex', function() {
 return findIndex;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'hasIn', function() {
 return hasIn;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isEqual', function() {
 return isEqual;
});
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ './src/is.js');
/* harmony import */ var _getIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getIn.js */ './src/getIn.js');
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'getIn', function() {
 return _getIn_js__WEBPACK_IMPORTED_MODULE_1__.default;
});


function _typeof(obj) {
 if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
 _typeof = function _typeof(obj) {
 return typeof obj;
};
} else {
 _typeof = function _typeof(obj) {
 return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
} return _typeof(obj);
}


/**
 * Get a nested value of an object or return
 * @alias
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */


/**
 * Returns the Objects keys
 * @param  {Object} obj
 * @return {Array}  result
 */

function keys(obj) {
  var result = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Converts an Object to an Array
 * @param  {Object} val
 * @return {Array}  result
 */

function toArray(val) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.not.obj(val)) {
    return val;
  }

  var objKeys = keys(val);
  return objKeys.map(function(keyName) {
    return val[keyName];
  });
}
/**
 * Iterate through each Object keys
 * And binds a callback to each keys
 * @param  {Object} val
 * @param  {func}   fn
 */

function each(val, fn) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.obj(val)) {
    val = toArray(val);
  }

  if (_is__WEBPACK_IMPORTED_MODULE_0__.not.arr(val)) {
    throw new TypeError('InvalidArgument: Not iterable');
  }

  for (var i, l = val.length; i < l; i++) {
    fn.call(val, val[i], i, val);
  }
}
/**
 * Returns the size of an object or array
 * @param  {Object || Array} val
 * @return {Number}
 */

function size(val) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.obj(val)) {
    return keys(val).length;
  } else if (_is__WEBPACK_IMPORTED_MODULE_0__.arr(val)) {
    return val.length;
  } else {
    return -1;
  }
}
/**
 * Returns the function if available inside an object
 * @param  {Object || Array || Func} val
 * @return {mixed}
 */

function searchFn(val) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.func(val)) {
    return val;
  } else if (_is__WEBPACK_IMPORTED_MODULE_0__.obj(val)) {
    return function(item) {
      // eslint-disable-line func-names
      if (_is__WEBPACK_IMPORTED_MODULE_0__.not.obj(item)) {
        return false;
      }

      var found = 0;

      for (var key in val) {
        if (val.hasOwnProperty(key) && item[key] === val[key]) {
          found += 1;
        }
      }

      return size(val) === found;
    };
  } else {
    throw new TypeError('InvalidArgument: compare argument must be a function or object');
  }
}
/**
 * Similar to Javscript .some() function
 * @param  {Object || Array}  values
 * @param  {Func}             compare
 * @return {Bool}
 */

function any(values, compare) {
  // If not array or object, return
  if (_typeof(values) !== 'object') {
    return false;
  }

  if (_is__WEBPACK_IMPORTED_MODULE_0__.obj(values)) {
    values = toArray(values);
  }

  for (var i = 0, l = values.length; i < l; i++) {
    if (searchFn(compare).call(values, values[i], i, values) === true) {
      return true;
    }
  }

  return false;
}
/**
 * Similar to  Underscore _.find() function
 * @param  {Array}  arr
 * @param  {Func}   compare
 * @param  {Mixed}  ctx (default value) optional
 * @return {Mixed}
 */

function find(arr, compare, ctx) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.not.arr(arr)) {
    return arr;
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    if (searchFn(compare).call(ctx || arr, arr[i], i, arr) === true) {
      return arr[i];
    }
  }

  return void 0;
}
/**
 * Returns the index of an item in array if exisits, -1 otherwise
 * @param  {Array}  arr
 * @param  {Func}   compare
 * @param  {Mixed}  ctx (default value) optional
 * @return {Number} -1 if can't find it
 */

function findIndex(arr, compare, ctx) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.not.arr(arr)) {
    return arr;
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    if (searchFn(compare).call(ctx || arr, arr[i], i, arr) === true) {
      return i;
    }
  }

  return -1;
}
/**
 * Returns true if an object has the matched value,
 * otherwise false
 * @param  {Object}         obj
 * @param  {Array<String>}  path
 * @return {Mixed}
 */

function hasIn(obj, path) {
  return _is__WEBPACK_IMPORTED_MODULE_0__.not.undef(Object(_getIn_js__WEBPACK_IMPORTED_MODULE_1__.default)(obj, path));
}
/**
 * First compres the size of two objects and then does a shallow
 * comparison of the two objects values
 * @param  {Mixed} one
 * @param  {Mixed} two
 * @return {Boolean}
 */

function isEqual(a, b) {
  if (a === b) {
    // Immutable
    return true;
  } else if (_typeof(a) !== _typeof(b)) {
    // Type mismatch
    return false;
  } else if (a instanceof Array && b instanceof Array && a.length !== b.length) {
    // Array length mismatch
    return false;
  } else if (a instanceof Array && b instanceof Array) {
    // Recurisively compare array values
    return a.every(function(val, i) {
      return isEqual(a[i], b[i]);
    });
  } else if (_typeof(a) === 'object' && Object.keys(a).length !== Object.keys(b).length) {
    // Key length mismatch
    return false;
  } else if (_typeof(a) === 'object') {
    // Recurisively check object keys
    return Object.keys(a).every(function(key) {
      return isEqual(a[key], b[key]);
    });
  } else {
    // No matches
    return false;
  }
}

/***/ }),

/***/ './src/getIn.js':
/*!**********************!*\
  !*** ./src/getIn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function() {
 return getIn;
});

/**
 * Get a nested value of an object or return
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */

function _typeof(obj) {
 if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
 _typeof = function _typeof(obj) {
 return typeof obj;
};
} else {
 _typeof = function _typeof(obj) {
 return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
} return _typeof(obj);
}

function getIn(path, obj, defaultValue) {
  if (_typeof(obj) !== 'object' || path instanceof Array !== true) {
    return defaultValue;
  } else if (path.length === 0) {
    return obj;
  } // Let the cloning begin


  path = path.slice(0);
  var result = Object.assign({}, obj);

  while (path.length > 0) {
    var key = path.shift();

    if (!(key in result)) {
      // Can'd the the key in the object so return the defaultValue
      return defaultValue;
    }

    result = result[key];
  }

  return result;
}

/***/ }),

/***/ './src/index.js':
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, Strings, Utils, Sort, Collections, ParseUrl, NativeFileUploadDialog, KeyEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Strings', function() {
 return Strings;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Utils', function() {
 return Utils;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Sort', function() {
 return Sort;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Collections', function() {
 return Collections;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ParseUrl', function() {
 return ParseUrl;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'NativeFileUploadDialog', function() {
 return NativeFileUploadDialog;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'KeyEvents', function() {
 return KeyEvents;
});
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings */ './src/strings.js');
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ './src/utils.js');
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort */ './src/sort.js');
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections */ './src/collections.js');
/* harmony import */ var _parseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parseUrl */ './src/parseUrl.js');
/* harmony import */ var _parseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_parseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NativeFileUploadDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NativeFileUploadDialog */ './src/NativeFileUploadDialog.js');
/* harmony import */ var _KeyEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KeyEvents */ './src/KeyEvents.js');
/* harmony import */ var _KeyEvents__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_KeyEvents__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Exports
 *
 * @examples
 *    import {capitalize, stringShortener} from "ship-components-utility";
 */


/* harmony default export */ __webpack_exports__.default = (_strings__WEBPACK_IMPORTED_MODULE_0__);
var Strings = _strings__WEBPACK_IMPORTED_MODULE_0__;
var Utils = _utils__WEBPACK_IMPORTED_MODULE_1__;
var Sort = _sort__WEBPACK_IMPORTED_MODULE_2__;
var Collections = _collections__WEBPACK_IMPORTED_MODULE_3__;
var ParseUrl = _parseUrl__WEBPACK_IMPORTED_MODULE_4___default.a;
var NativeFileUploadDialog = _NativeFileUploadDialog__WEBPACK_IMPORTED_MODULE_5__.default;
var KeyEvents = _KeyEvents__WEBPACK_IMPORTED_MODULE_6___default.a;

/***/ }),

/***/ './src/is.js':
/*!*******************!*\
  !*** ./src/is.js ***!
  \*******************/
/*! exports provided: obj, str, undef, func, nul, arr, num, iterable, not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'obj', function() {
 return obj;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'str', function() {
 return str;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'undef', function() {
 return undef;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'func', function() {
 return func;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'nul', function() {
 return nul;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'arr', function() {
 return arr;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'num', function() {
 return num;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'iterable', function() {
 return iterable;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'not', function() {
 return not;
});


function isType(type) {
  var not = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var val = arguments.length > 2 ? arguments[2] : undefined;
  var result;

  if (type === 'Undefined') {
    // If value is set to the global `undefined` we'll get the wrong result.
    // Minifiers may do this
    result = typeof val === 'undefined';
  } else {
    result = Object.prototype.toString.call(val) === '[object ' + type + ']';
  }

  return not ? !result : result;
}

var keys = {
  obj: 'Object',
  str: 'String',
  undef: 'Undefined',
  func: 'Function',
  nul: 'Null',
  arr: 'Array',
  num: 'Number'
};
var obj = isType.bind(null, 'Object', false);
var str = isType.bind(null, 'String', false);
var undef = isType.bind(null, 'Undefined', false);
var func = isType.bind(null, 'Function', false);
var nul = isType.bind(null, 'Null', false);
var arr = isType.bind(null, 'Array', false);
var num = isType.bind(null, 'Number', false);

function iter(not, val) {
  var result = obj(val) || arr(val) || func(val);
  return not ? !result : result;
}

var iterable = iter.bind(null, false);
var not = function() {
  // eslint-disable-line func-names
  var fns = {};

  for (var key in keys) {
    if (keys.hasOwnProperty(key)) {
      fns[key] = isType.bind(null, keys[key], true);
    }
  }

  fns.iterable = iter.bind(null, true);
  return fns;
}(undefined);

/***/ }),

/***/ './src/parseUrl.js':
/*!*************************!*\
  !*** ./src/parseUrl.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'use strict';


var urlPattern = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
/**
 * Breaks a URL into parts
 * @param {String} url
 */

function parseUrl(url) {
  var matches = url.match(urlPattern);

  if (matches) {
    return {
      protocol: matches[2],
      hostname: matches[4],
      path: matches[5],
      query: matches[7],
      fragment: matches[9]
    };
  } else {
    return void 0;
  }
}

module.exports = parseUrl;

/***/ }),

/***/ './src/pluck.js':
/*!**********************!*\
  !*** ./src/pluck.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', function() {
 return pluck;
});
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ './src/is.js');

'use strict';


/**
 * Extract only certian fields form an objectSize
 * @param    {Object}           src
 * @param    {Array<String>}    fields
 * @return   {Object}
 */

function pluck(src, fields) {
  if (_is__WEBPACK_IMPORTED_MODULE_0__.not.obj(src)) {
    throw new Error('src is not an object');
  } else if (_is__WEBPACK_IMPORTED_MODULE_0__.not.arr(fields)) {
    throw new Error('fields is not an array');
  }

  var result = {};
  fields.forEach(function(key) {
    if (key in src) {
      result[key] = src[key];
    }
  });
  return result;
}

/***/ }),

/***/ './src/sort.js':
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! exports provided: compareDates, sortBy, sortByDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'compareDates', function() {
 return compareDates;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'sortBy', function() {
 return sortBy;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'sortByDates', function() {
 return sortByDates;
});

/** ****************************************************************************
 * Sort
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Sorting functions to be user on front and backend
 * @flow
 ******************************************************************************/

/**
 * Check to see if a string starts with a '-'
 * @type    {RegExp}
 */

var directionRegex = /^\-.*/;
/**
 * Compare two dates
 *
 * @param     {Date}    a
 * @param     {Date}    b
 * @return    {Number}
 */

function compareDates(a, b) {
  var aTest = a instanceof Date ? a : new Date(a);
  var bTest = b instanceof Date ? b : new Date(b);
  return aTest - bTest;
}
/**
 * Create a sorting function to sort an array of objects by prop. We accept any
 * number of arguments to sort by
 *
 * @param     {String...}    prop
 * @return    {Function}
 */

function sortBy() {
  var props = Array.prototype.slice.call(arguments);
  /**
   * Comparator
   *
   * @param     {Object}    a
   * @param     {Object}    b
   * @return    {Number}
   */
  // Disable the eslint warning on function complexity
  // TO DO: Improve the anonymus function performance
  // eslint-disable-next-line

  return function(a, b) {
    // Loop through each prop we want to sort by
    var index = -1;

    while (++index < props.length) {
      // Determine if we sort asc or desc
      var direction = directionRegex.test(props[index]) ? -1 : 1; // Trim the prop since the object key can't have spaces in it

      var prop = props[index].trim().replace(/^\-/, '');
      var keys = prop.split('.'); // Sort by sub properties

      if (keys.length > 1) {
        for (var i = 0; i < keys.length - 1; i++) {
          a = a[keys[i]];
          b = b[keys[i]];
        }
      }

      prop = keys[keys.length - 1];

      if (a[prop] instanceof Date && b[prop instanceof Date]) {
        return compareDates(a[prop], b[prop]) * direction;
      } else if (a[prop] && b[prop] && a[prop] > b[prop]) {
        return 1 * direction;
      } else if (a[prop] && b[prop] && a[prop] < b[prop]) {
        return -1 * direction;
      } else if (a[prop] && !b[prop]) {
        return 1 * direction;
      } else if (!a[prop] && b[prop]) {
        return -1 * direction;
      } // If a[prop] matches b[prop] try the next prop

    } // Default matches


    return 0;
  };
}
/**
 * Create a sorting function to sort an array of objects by prop. We accept any
 * number of arguments to sort by
 *
 * @param     {String...}    prop
 * @return    {Function}
 */

function sortByDates() {
  var props = Array.prototype.slice.call(arguments);
  /**
   * Comparator
   *
   * @param     {Object}    a
   * @param     {Object}    b
   * @return    {Number}
   */

  return function(a, b) {
    // eslint-disable-line func-names
    // Loop through each prop we want to sort by
    var index = -1;

    while (++index < props.length) {
      // Determine if we sort asc or desc
      var direction = directionRegex.test(props[index]) ? -1 : 1; // Trim the prop since the object key can't have spaces in it

      var prop = props[index].trim().replace(/^\-/, '');
      return compareDates(a[prop], b[prop]) * direction;
    } // Default matches


    return 0;
  };
}

/***/ }),

/***/ './src/strings.js':
/*!************************!*\
  !*** ./src/strings.js ***!
  \************************/
/*! exports provided: hash, slugify, capitalize, titleCase, camelCase, toUnderscoreCase, generateRandomString, stringShortener, convertHTMLToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'hash', function() {
 return hash;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'slugify', function() {
 return slugify;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'capitalize', function() {
 return capitalize;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'titleCase', function() {
 return titleCase;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'camelCase', function() {
 return camelCase;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'toUnderscoreCase', function() {
 return toUnderscoreCase;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'generateRandomString', function() {
 return generateRandomString;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'stringShortener', function() {
 return stringShortener;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'convertHTMLToString', function() {
 return convertHTMLToString;
});

/**
 * Convert a string to a unique hash we can use as an key
 * http://stackoverflow.com/a/7616484
 * @param  {String} str
 * @return {Number}
 */

function hash(str) {
  var result = 0;

  if (str.length === 0) {
    return result;
  }

  for (var i = 0, len = str.length; i < len; i++) {
    var chr = str.charCodeAt(i);
    result = (result << 5) - result + chr;
    result |= 0; // Convert to 32bit integer
  }

  return result;
}
/**
 * Convert a string into something that is url and css friendly
 * @param     {String}    str
 * @return    {String}
 */

function slugify(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.trim().toLowerCase().replace(/\s|\/|\\|\!|\'|\"|\&/g, '-').replace('--', '-');
}
/**
 * Capitalize string
 * If more than one word, the 1st word will be capilized
 * @param     {String}    str
 * @return    {String}
 */

function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Title case string
 * @param     {String}    str
 * @return    {String}
 */

function titleCase(str) {
  return str.split(/\s/g).map(function(word) {
    return capitalize(word, true);
  }).join(' ');
}
/**
 * Convert to camelCase string
 * @param     {String}    str
 * @return    {String}
 */

function camelCase(str) {
  return str.charAt(0).toLowerCase() + titleCase(str).replace(/\s/g, '').substr(1);
}
/**
 * Convert camel case to underscore case
 * @param  {String} str
 * @return {String}
 */

function toUnderscoreCase(str) {
  if (!str) {
    return str;
  }

  return str.replace(/\.?([A-Z])/g, function(x, y) {
    // eslint-disable-line func-names
    return '_' + y.toLowerCase();
  }).replace(/^_/, '').toUpperCase();
}
/**
 * Generates a short random String
 * @param  {Number} len
 * @return {String}
 */

function generateRandomString(len) {
  len = len || 7;
  return (Math.random() * Math.pow(36, len)).toString(36).split('.')[0];
}
/**
 * Shorten string
 * @param     {String}    str
 * @param     {Number}    charCount [default==100]
 * @return    {String}
 */

function stringShortener(str) {
  var charCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (typeof str !== 'string' || str.length < charCount) {
    return str;
  }

  return str.slice(0, charCount) + ' ...';
}
/**
 * Removes HTML tags from string
 *
 * @param     {String}    str
 * @return    {String}
 */

function convertHTMLToString(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.replace(/<\/?[^>]+(>|$)/g, '');
}

/***/ }),

/***/ './src/utils.js':
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: pluck, objectSize, isObject, isFunction, isString, isArray, isUndefined, bind, bindAll, mergeDeep, deepCopy, isIEBrowser, detectIEVersion, isEqualArray, throttle, getScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

'use strict';
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'objectSize', function() {
 return objectSize;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isObject', function() {
 return isObject;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isFunction', function() {
 return isFunction;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isString', function() {
 return isString;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isArray', function() {
 return isArray;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isUndefined', function() {
 return isUndefined;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'bind', function() {
 return bind;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'bindAll', function() {
 return bindAll;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'mergeDeep', function() {
 return mergeDeep;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'deepCopy', function() {
 return deepCopy;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isIEBrowser', function() {
 return isIEBrowser;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'detectIEVersion', function() {
 return detectIEVersion;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'isEqualArray', function() {
 return isEqualArray;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'throttle', function() {
 return throttle;
});
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getScrollTop', function() {
 return getScrollTop;
});
/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluck */ './src/pluck.js');
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'pluck', function() {
 return _pluck__WEBPACK_IMPORTED_MODULE_0__.default;
});


'use strict';
/**
 * @alias to pluck
 */

function _defineProperty(obj, key, value) {
 if (key in obj) {
 Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
} else {
 obj[key] = value;
} return obj;
}

function _typeof(obj) {
 if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
 _typeof = function _typeof(obj) {
 return typeof obj;
};
} else {
 _typeof = function _typeof(obj) {
 return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
};
} return _typeof(obj);
}


/**
 * Returns the size of an Object
 * @param     {Object}    obj
 * @return    {Number}    size
 */

function objectSize(obj) {
  var size = 0;
  var key;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      size++;
    }
  }

  return size;
}
/**
 * Checks if value is the language type of Object
 * will skip values === null
 * @param     {Mixed}    prop
 * @return    {Bool}
 */

function isObject(prop) {
  // Weird behaviour with spec in Javascript, the typeof Array is Object
  return prop !== null && !Array.isArray(prop) && _typeof(prop) === 'object';
}
/**
 * Checks if value is classified as a Function object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */

function isFunction(prop) {
  return typeof prop === 'function';
}
/**
 * Checks if value is classified as a String primitive or object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */

function isString(prop) {
  return typeof prop === 'string';
}
/**
 * Checks if value is classified as an Array object
 * @param     {Mixed}    prop
 * @return    {Bool}
 */

function isArray(prop) {
  return Array.isArray(prop);
}
/**
 * Checks if value is undefined
 * @param     {Mixed}    prop
 * @return    {Bool}
 */

function isUndefined(prop) {
  return typeof prop === 'undefined';
}
/**
 * Bind to itself
 * @param     {args...}
 * @return    {Undefined}
 * @example   bind(this, 'handleClick', 'handleSubmit');
 */

function bind() {
  var args = Array.prototype.slice.call(arguments);
  var ctx = args.splice(0, 1)[0];

  for (var i = 0; i < args.length; i++) {
    ctx[args[i]] = ctx[args[i]].bind(ctx);
  }
}
/**
 * Binds methods of an object to the object itself,
 * overwriting the existing method.
 * Method names may be specified as individual arguments
 * or as arrays of method names
 * @param     {Object}  obj
 * @return    {Object}  result
 */

function bindAll(obj) {
  var result = obj;

  for (var prop in result) {
    if (result.hasOwnProperty(prop) && typeof result[prop] === 'function') {
      result[prop] = result[prop].bind(result);
    }
  }

  return result;
}
/**
 * This method is like _.assign except that it
 * recursively merges own and inherited enumerable
 * string keyed properties of source objects into the
 * destination object
 * @param     {Object}      target
 * @param     {Object}      source
 * @return    {Object}      target
 */

function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, _defineProperty({}, key, {}));
        }

        mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return target;
}
/**
 * Recursive object copy
 *
 * @param     {Array<Objects> || Objects}    obj
 * @return    {Array<Objects> || Objects}
 */

/* eslint-disable */

function deepCopy(obj) {
  var result; // Handle Date

  if (obj instanceof Date) {
    result = new Date();
    result.setTime(obj.getTime());
    return result;
  }

  var gdcc = '__getDeepCircularCopy__';

  if (obj !== Object(obj)) {
    return obj; // primitive value
  }

  var set = gdcc in obj;
  var cache = obj[gdcc];

  if (set && typeof cache === 'function') {
    return cache();
  } // else


  obj[gdcc] = function () {
    return result;
  }; // overwrite
  // Array of objects


  if (obj instanceof Array) {
    result = [];

    for (var i = 0; i < obj.length; i++) {
      result[i] = deepCopy(obj[i]);
    }
  } else if (obj instanceof Object) {
    // Object or nested objects (tree)
    result = {};

    for (var prop in obj) {
      if (prop !== gdcc) {
        result[prop] = deepCopy(obj[prop]);
      } else if (set) {
        result[prop] = deepCopy(cache);
      }
    }
  } else {
    throw new Error('Unable to copy obj! Its type is not supported.');
  }

  if (set) {
    obj[gdcc] = cache; // reset
  } else {
    delete obj[gdcc]; // unset again
  }

  return result;
}
/*eslint-enable */

/**
 * Detect IE browser
 * @param  {String} prop
 * @return {Bool}
 */

function isIEBrowser(prop) {
  switch (prop) {
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
}
/**
 * Detect IE browser version
 * @return {String}
 */

function detectIEVersion() {
  var ua = window ? window.navigator.userAgent : navigator.userAgent; // Test values; Uncomment to check result …
  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return false;
}
/**
 * Shallow comparison between 2 arrays
 * @param  {Array} arr1
 * @param  {Array} arr2
 * @param  {Function} cb {optional}
 * @return {Bool}
 */

function isEqualArray(arr1, arr2, cb) {
  // return false if both are not an array
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  if (typeof cb !== 'function') {
    cb = function cb(element, index) {
      return element === arr2[index];
    };
  }

  return arr1.every(cb);
}
/**
 * From Underscore.js:
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run as
 * much as it can, without ever going more than once per wait duration; but if
 * you’d like to disable the execution on the leading edge, pass {leading: false}.
 * To disable execution on the trailing edge, ditto.
 * @param {Function} func
 * @param {Number} wait     milliseconds
 * @param {Object} options
 *
 * @return {Function}
 */

function throttle(func, wait, options) {
  var context;
  var args;
  var result;
  var timeout = null;
  var previous = 0;

  if (!options) {
    options = {};
  }

  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);

    if (!timeout) {
      context = args = null;
    }
  };

  return function() {
    var now = Date.now();

    if (!previous && options.leading === false) {
      previous = now;
    }

    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}
/**
 * Polyfill for finding document scrollTop.
 */

function getScrollTop() {
  var scrollTop = window.pageYOffset;

  if (typeof scrollTop === 'undefined') {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  }

  if (isNaN(scrollTop) || typeof scrollTop === 'undefined') {
    throw new Error('Unable to retrieve scrollTop. :(');
  }

  return scrollTop;
}

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map
