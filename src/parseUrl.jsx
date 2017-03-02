// Breaks a URL into parts
const urlPattern = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');

export function parseUrl(url) {
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
