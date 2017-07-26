function isType(type, not = false, val) {
  let result;
  if (type === 'Undefined') {
    // If value is set to the global `undefined` we'll get the wrong result.
    // Minifiers may do this
    result = typeof val === 'undefined';
  } else {
    result = Object.prototype.toString.call(val) === '[object ' + type + ']';
  }
  return not ? !result : result;
}

const keys = {
  obj: 'Object',
  str: 'String',
  undef: 'Undefined',
  func: 'Function',
  nul: 'Null',
  arr: 'Array',
  num: 'Number'
};

export var obj = isType.bind(null, 'Object', false);

export var str = isType.bind(null, 'String', false);

export var undef = isType.bind(null, 'Undefined', false);

export var func = isType.bind(null, 'Function', false);

export var nul = isType.bind(null, 'Null', false);

export var arr = isType.bind(null, 'Array', false);

export var num = isType.bind(null, 'Number', false);

function iter(not, val) {
  let result = obj(val) || arr(val) || func(val);
  return not ? !result : result;
}

export var iterable = iter.bind(null, false);

export var not = (function() { // eslint-disable-line func-names
  let fns = {};
  for (let key in keys) {
    if (keys.hasOwnProperty(key)) {
      fns[key] = isType.bind(null, keys[key], true);
    }
  }
  fns.iterable = iter.bind(null, true);
  return fns;
})(this);
