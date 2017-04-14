import * as is from './is';
import getIn from './getIn.js';

/**
 * Get a nested value of an object or return
 * @alias
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */
 export {default as getIn} from './getIn';

/**
 * Returns the Objects keys
 * @param  {Object} obj
 * @return {Array}  result
 */
export function keys(obj) {
  let result = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
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
export function toArray(val) {
  if(is.not.obj(val)) {
    return val;
  }
  let objKeys = keys(val);
  return objKeys.map((keyName) => val[keyName]);
}

/**
 * Iterate through each Object keys
 * And binds a callback to each keys
 * @param  {Object} val
 * @param  {func}   fn
 */
export function each(val, fn) {
  if(is.obj(val)) {
    val = toArray(val);
  }
  if (is.not.arr(val)) {
    throw new TypeError('InvalidArgument: Not iterable');
  }
  for(let i, l = val.length; i < l; i++) {
    fn.call(val, val[i], i, val);
  }
}

/**
 * Returns the size of an object or array
 * @param  {Object || Array} val
 * @return {Number}
 */
export function size(val) {
  if (is.obj(val)) {
    return keys(val).length;
  } else if(is.arr(val)) {
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
export function searchFn(val) {
  if(is.func(val)) {
    return val;
  } else if (is.obj(val)) {
    return function(item) {
      if (is.not.obj(item)) {
        return false;
      }
      let found = 0;
      for (let key in val) {
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
export function any(values, compare) {
  // If not array or object, return
  if(typeof values !== 'object') {
    return false;
  }

  if (is.obj(values)) {
    values = toArray(values);
  }
  for (let i = 0, l = values.length; i < l; i++) {
    if(searchFn(compare).call(values, values[i], i, values) === true) {
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
export function find(arr, compare, ctx) {
  if(is.not.arr(arr)) {
    return arr;
  }

  for (let i = 0, l = arr.length; i < l; i++) {
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
export function findIndex(arr, compare, ctx) {
  if(is.not.arr(arr)) {
    return arr;
  }
  for (let i = 0, l = arr.length; i < l; i++) {
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
export function hasIn(obj, path) {
  return is.not.undef(getIn(obj, path));
}

/**
 * First compres the size of two objects and then does a shallow
 * comparison of the two objects values
 * @param  {Mixed} one
 * @param  {Mixed} two
 * @return {Boolean}
 */
export function isEqual(a, b) {
  if (a === b) {
    // Immutable
    return true;
  } else if (typeof a !== typeof b) {
    // Type mismatch
    return false;
  } else if (a instanceof Array && b instanceof Array && a.length !== b.length) {
    // Array length mismatch
    return false;
  } else if (a instanceof Array && b instanceof Array) {
    // Recurisively compare array values
    return a.every((val, i) => isEqual(a[i], b[i]));
  } else if (typeof a === 'object' && Object.keys(a).length !== Object.keys(b).length) {
    // Key length mismatch
    return false;
  } else if (typeof a === 'object') {
    // Recurisively check object keys
    return Object.keys(a).every(key => isEqual(a[key], b[key]));
  } else {
    // No matches
    return false;
  }
}
