const urlPattern = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');

/**
 * Breaks a URL into parts
 * @param {String} url
 */
function parseUrl(url) {
  const matches = url.match(urlPattern);
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
