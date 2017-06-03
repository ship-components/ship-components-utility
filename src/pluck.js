'use strict';

import * as is from './is';

/**
 * Extract only certian fields form an objectSize
 * @param    {Object}           src
 * @param    {Array<String>}    fields
 * @return   {Object}
 */
export default function pluck(src, fields) {
  if (is.not.obj(src)) {
    throw new Error('src is not an object');
  } else if (is.not.arr(fields)) {
    throw new Error('fields is not an array');
  }

  let result = {};
  fields.forEach((key) => {
    if (key in src) {
      result[key] = src[key];
    }
  });
  return result;
}
