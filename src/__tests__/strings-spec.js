/* eslint-disable */

describe('Strings Library', () => {
  describe('hash Method', () => {
    const {hash} = require('../strings');

    test('should return true if 32bit integer generated', () => {
      let str = 'this is a sample string';
      let result = hash(str);

      expect(typeof str).toBe('string');
      expect(typeof result).toBe('number');

      expect(hash('test 1')).not.toEqual(hash('test 2'));
      // Ensure hash return the same result for the same input
      expect(hash('test')).toEqual(hash('test'));
    });
  });

  describe('slugify Method', () => {
    const {slugify} = require('../strings');

    test('should return true when slugify method converts correctly', () => {
      let str1 = 'THis Is A!   sample--string';
      let str2 = 'this-is-a---sample--string';
      let result = slugify(str1);

      expect(result).not.toEqual(str1);
      expect(result).toEqual(str2);
    });
  });

  describe('String format Methods', () => {
    const {capitalize, titleCase, camelCase, toUnderscoreCase} = require('../strings');

    test('should return true when capitalize method converts correctly', () => {
      let str1 = 'test test';
      let matchStr = 'Test test';
      let result = capitalize(str1);

      expect(result).not.toEqual(str1);
      expect(result).toEqual(matchStr);
    });

    test('should return true when titleCase method converts correctly', () => {
      let str1 = 'this is a random string';
      let str2 = 'This Is A Random String';
      let result = titleCase(str1);

      expect(result).not.toEqual(str1);
      expect(result).toEqual(str2);
    });

    test('should return true when camelCase method converts correctly', () => {
      let str1 = 'this is a random string';
      let str2 = 'thisIsARandomString';
      let result = camelCase(str1);

      expect(result).not.toEqual(str1);
      expect(result).toEqual(str2);
    });

    test('should return true when toUnderscoreCase method converts correctly', () => {
      let str1 = 'thisIsARandomString';
      let str2 = 'TypeOfData.AlphaBeta';

      let matchStr1 = 'THIS_IS_A_RANDOM_STRING';
      let matchStr2 = 'TYPE_OF_DATA_ALPHA_BETA';

      let result1 = toUnderscoreCase(str1);
      let result2 = toUnderscoreCase(str2);

      expect(result1).not.toEqual(str1);
      expect(result1).toEqual(matchStr1);

      expect(result2).not.toEqual(str2);
      expect(result2).toEqual(matchStr2);
    });
  });

  describe('generateRandomString Method', () => {
    const {generateRandomString} = require('../strings');

    test('should return true when generated the correct string length', () => {
      let len1 = 5;
      let len2 = 10;

      let result1 = generateRandomString(len1);
      let result2 = generateRandomString(len2);

      expect(typeof result1).toEqual('string');
      expect(result1.length).toEqual(len1);

      expect(typeof result2).toEqual('string');
      expect(result2.length).toEqual(len2);
    });
  });

  describe('stringShortener Method', () => {
    const {stringShortener} = require('../strings');

    test('should return true when shorten the string correctly', () => {
      let str = 'this is a sample text for testing';
      let charCount = 10;

      let result = stringShortener(str, charCount);
      expect(typeof result).toEqual('string');
      // Length would be charCount + ' ...' which is 4 chars
      expect(result.length).toEqual(charCount + 4);
      expect(result).not.toEqual(str);
    });
  });

  describe('convertHTMLToString Method', () => {
    const {convertHTMLToString} = require('../strings');

    test('should return the value if not type of string', () => {
      let num = 1;
      let result = convertHTMLToString(num);

      expect(typeof result).toEqual('number');
      expect(result).toEqual(num);
    });

    test('should return true when HTML tags are removed from string', () => {
      let str = '<p>this is a text for<span>testing</span></p>';
      let result = convertHTMLToString(str);

      expect(result).not.toEqual(str);
      expect(result).toEqual('this is a text fortesting');
    });
  });
});
