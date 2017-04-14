/**
 * Get a nested value of an object or return
 * @param  {Array<String>}  path
 * @param  {Object}         obj
 * @param  {Mixed}          defaultValue
 * @return {Mixed}
 */
export default function getIn(path, obj, defaultValue) {
  if (typeof obj !== 'object' || path instanceof Array !== true) {
    return defaultValue;
  } else if (path.length === 0) {
    return obj;
  }

  // Let the cloning begin
  path = path.slice(0);
  let result = Object.assign({}, obj);

  while (path.length > 0) {
    const key = path.shift();
    if (!(key in result)) {
      // Can'd the the key in the object so return the defaultValue
      return defaultValue;
    }
    result = result[key];
  }

  return result;
}
