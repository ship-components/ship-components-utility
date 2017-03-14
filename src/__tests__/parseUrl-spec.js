/* eslint-disable */

describe('ParseURL Library', () => {
   test('should return true if parses correctly', () => {
      const parseUrl = require('../parseUrl');
      let url1 = 'http://www.sony.com/homepage?param1=something&param2=somethingelse';

      let protocol = 'http';
      let hostname = 'www.sony.com';
      let query = 'param1=something&param2=somethingelse';
      let path = '/homepage';

      let result = parseUrl(url1);

      expect(typeof result).toEqual('object');
      expect(result.protocol).toEqual(protocol);
      expect(result.hostname).toEqual(hostname);
      expect(result.query).toEqual(query);
      expect(result.path).toEqual(path);
   });
});
