/**
 * Convert a string to a unique hash we can use as an key
 * http://stackoverflow.com/a/7616484
 * @param  {String} str
 * @return {Number}
 */
export function hash(str) {
  let result = 0;
  if (str.length === 0) {
    return result;
  }
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    result = ((result << 5) - result) + chr;
    result |= 0; // Convert to 32bit integer
  }
  return result;
}

/**
 * Convert a string into something that is url and css friendly
 * @param     {String}    str
 * @return    {String}
 */
export function slugify(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/\s|\/|\\|\!|\'|\"|\&/g, '-')
    .replace('--', '-');
}

/**
 * Capitalize string
 * Convert to TitleCase if more than one word
 * @param     {String}    str
 * @return    {String}
 */
export function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Title case string
 * @param     {String}    str
 * @return    {String}
 */
export function titleCase(str) {
  return str.split(/\s/g).map((word) => capitalize(word, true)).join(' ');
}

/**
 * Convert to camelCase string
 * @param     {String}    str
 * @return    {String}
 */
export function camelCase(str) {
  return str.charAt(0).toLowerCase() + titleCase(str).replace(/\s/g, '').substr(1);
}

/**
 * Convert camel case to underscore case
 * @param  {String} str
 * @return {String}
 */
export function toUnderscoreCase(str) {
  if (!str) {
    return str;
  }
  return str.replace(/(?:^[a-z]|\.?[a-z])([A-Z])/g, function(m, l){
    return m.replace(l, '_' + l);
  }).toUpperCase();
}

/**
 * Generates a short random String
 * @param  {Number} len
 * @return {String}
 */
export function generateRandomString(len) {
  len = len || 7;
  return (Math.random() * Math.pow(36,len)).toString(36).split('.')[0];
}

/**
 * Shorten string
 * @param     {String}    str
 * @param     {Number}    charCount [default==100]
 * @return    {String}
 */
export function stringShortener(str, charCount = 100) {
  if (typeof str !== 'string' || str.length < charCount) {
    return str;
  }

  return str.slice(0, charCount) + ' ...';
}

/**
 * Validate strings (name, username or email)
 *
 * @param     {String}    prop [default=email]
 * @param     {String}    str
 * @return    {Bool}
 */
export function stringIsValid(prop, str) {
  if (typeof str !== 'string') {
    return str;
  }

  let isValid = null;

  switch(prop) {
    case 'name':
      isValid = /^[a-zA-Z ]{2,30}$/.test(str);
      break;

    case 'username':
      isValid = /^[a-zA-Z0-9]+$/.test(str);
      break;

    default:
      isValid = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(str);
      break;
    }

  return isValid;
}

/**
 * Removes HTML tags from string
 *
 * @param     {String}    str
 * @return    {String}
 */
export function convertHTMLToString(str) {
  if (typeof str !== 'string') {
    return str;
  }

  return str.replace(/<\/?[^>]+(>|$)/g, '');
}
