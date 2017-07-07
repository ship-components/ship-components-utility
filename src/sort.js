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
const directionRegex = /^\-.*/;

/**
 * Compare two dates
 *
 * @param     {Date}    a
 * @param     {Date}    b
 * @return    {Number}
 */
export function compareDates(a, b) {
  let aTest = a instanceof Date ? a : new Date(a);
  let bTest = b instanceof Date ? b : new Date(b);
  return aTest - bTest;
}

/**
 * Create a sorting function to sort an array of objects by prop. We accept any
 * number of arguments to sort by
 *
 * @param     {String...}    prop
 * @return    {Function}
 */
export function sortBy() {
  let props = Array.prototype.slice.call(arguments);

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
    let index = -1;
    while (++index < props.length) {
      // Determine if we sort asc or desc
      let direction = directionRegex.test(props[index]) ? -1 : 1;

      // Trim the prop since the object key can't have spaces in it
      let prop = props[index].trim().replace(/^\-/, '');

      let keys = prop.split('.');

      // Sort by sub properties
      if (keys.length > 1) {
        for (let i = 0; i < (keys.length - 1); i++) {
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
      }
      // If a[prop] matches b[prop] try the next prop
    }
    // Default matches
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
export function sortByDates() {
  let props = Array.prototype.slice.call(arguments);

  /**
   * Comparator
   *
   * @param     {Object}    a
   * @param     {Object}    b
   * @return    {Number}
   */
  return function(a, b) { // eslint-disable-line func-names
    // Loop through each prop we want to sort by
    let index = -1;
    while (++index < props.length) {
      // Determine if we sort asc or desc
      let direction = directionRegex.test(props[index]) ? -1 : 1;

      // Trim the prop since the object key can't have spaces in it
      let prop = props[index].trim().replace(/^\-/, '');

      return compareDates(a[prop], b[prop]) * direction;
    }
    // Default matches
    return 0;
  };
}
