import * as is from './is';

export function keys(obj) {
  let result = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

export function toArray(val) {
  if(is.not.obj(val)) {
    return val;
  }
  let objKeys = keys(val);
  return objKeys.map((keyName) => val[keyName]);
}

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

export function size(val) {
  if (is.obj(val)) {
    return keys(val).length;
  } else if(is.arr(val)) {
    return val.length;
  } else {
    return -1;
  }
}

function searchFn(val) {
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

export function any(values, compare) {
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
 * Get a nested value of an object or return
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */
export function getIn(path, obj, defaultValue) {
  path = path.slice(0);
  var result = Object.assign({}, obj);
  while (path.length > 0) {
    var key = path.shift();
    result = result[key];
    if (typeof result !== 'object' && path.length > 0) {
      return defaultValue;
    }
  }
  return result;
}

export function hasIn(obj, path) {
  return is.not.undef(getIn(obj, path));
}

/**
 * First compres the size of two objects and then does a shallow
 * comparison of the two objects values
 * @param  {Object} one
 * @param  {Object} two
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
