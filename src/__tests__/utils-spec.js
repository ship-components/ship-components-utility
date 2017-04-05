/* eslint-disable */

describe('Utils Library', () => {
  describe('objectSize Method', () => {
    const {objectSize} = require('../utils');

    test('should return true when correct object size calculated', () => {
      let obj = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
      }

      let result = objectSize(obj);

      expect(typeof result).toEqual('number');
      expect(result).toEqual(6);
    });
  });

  describe('Data Type Checking', () => {
    const {isObject, isFunction, isString, isArray, isUndefined} = require('../utils');
    let testObject;
    let testString;
    let testNumber;
    let testFunc;
    let testArray;
    let testUndefined;

    beforeAll(() => {
      testObject = {value: 'One'};
      testString = 'Two';
      testNumber = 3;
      testFunc = function() {};
      testArray = [4, 5];
      testUndefined = undefined;
    });

    // isObject Function
    describe('isObject Method', () => {
      test('should return true if object type is passed in', () => {
        expect(isObject(testObject)).toEqual(true);
      });

      test('should return false if object type is not passed in', () => {
        expect(isObject(testString)).toEqual(false);
        expect(isObject(testNumber)).toEqual(false);
        expect(isObject(testFunc)).toEqual(false);
        expect(isObject(testArray)).toEqual(false);
        expect(isObject(testUndefined)).toEqual(false);
      });
    });

    // isFunction Function
    describe('isFunction Method', () => {
      test('should return true if function type is passed in', () => {
        expect(isFunction(testFunc)).toEqual(true);
      });

      test('should return false if function type is not passed in', () => {
        expect(isFunction(testString)).toEqual(false);
        expect(isFunction(testNumber)).toEqual(false);
        expect(isFunction(testObject)).toEqual(false);
        expect(isFunction(testArray)).toEqual(false);
        expect(isFunction(testUndefined)).toEqual(false);
      });
    });

    // isString Function
    describe('isString Method', () => {
      test('should return true if string type is passed in', () => {
        expect(isString(testString)).toEqual(true);
      });

      test('should return false if string type is not passed in', () => {
        expect(isString(testFunc)).toEqual(false);
        expect(isString(testNumber)).toEqual(false);
        expect(isString(testObject)).toEqual(false);
        expect(isString(testArray)).toEqual(false);
        expect(isString(testUndefined)).toEqual(false);
      });
    });

    // isArray Function
    describe('isArray Method', () => {
      test('should return true if array type is passed in', () => {
        expect(isArray(testArray)).toEqual(true);
      });

      test('should return false if array type is not passed in', () => {
        expect(isArray(testFunc)).toEqual(false);
        expect(isArray(testNumber)).toEqual(false);
        expect(isArray(testObject)).toEqual(false);
        expect(isArray(testString)).toEqual(false);
        expect(isArray(testUndefined)).toEqual(false);
      });
    });

    // isUndefined Function
    describe('isUndefined Method', () => {
      test('should return true if udefined type is passed in', () => {
        expect(isUndefined(testUndefined)).toEqual(true);
      });

      test('should return false if undefined type is not passed in', () => {
        expect(isUndefined(testFunc)).toEqual(false);
        expect(isUndefined(testNumber)).toEqual(false);
        expect(isUndefined(testObject)).toEqual(false);
        expect(isUndefined(testString)).toEqual(false);
        expect(isUndefined(testArray)).toEqual(false);
      });
    });
  });

  describe('bind & bindAll Methods', () => {
    const {bind, bindAll} = require('../utils');

    test('should return true if function bind to itself', () => {
      function testFunc() { }
      let testObj = { testFunc };

      expect(testObj.testFunc.prototype).toBeDefined();
      bind(testObj, 'testFunc');
      // If bind correctly, prototype should be undefined
      expect(testObj.testFunc.prototype).not.toBeDefined();
    });

    test('should return true if function bindAll to itself', () => {
      function testFunc1() { }
      function testFunc2() { }
      function testFunc3() { }
      let testObj = { testFunc1, testFunc2, testFunc3 };

      expect(testObj.testFunc1.prototype).toBeDefined();
      expect(testObj.testFunc2.prototype).toBeDefined();
      expect(testObj.testFunc3.prototype).toBeDefined();

      bindAll(testObj);

      // If bind correctly, prototype should be undefined
      expect(testObj.testFunc1.prototype).not.toBeDefined();
      expect(testObj.testFunc2.prototype).not.toBeDefined();
      expect(testObj.testFunc3.prototype).not.toBeDefined();
    });
  });

  describe('mergeDeep Method', () => {
    const {mergeDeep} = require('../utils');

    test('should return true if merge 2 objects properlly', () => {
      const testObj1 = {
        name1: 'Test',
        value1: 'Testing',
        age1: 30,
        testFunc1: function() {}
      };

      const testObj2 = {
        name2: 'Test 2',
        value2: 'Testing 2',
        age2: 35,
        testFunc2: function() {}
      };

      expect(testObj1).not.toEqual(testObj2);

      let result = mergeDeep(testObj1, testObj2);

      expect(result.name1).toBeDefined();
      expect(result.name2).toBeDefined();
      expect(result.age1).toBeDefined();
      expect(result.age2).toBeDefined();
      expect(result.testFunc1).toBeDefined();
      expect(result.testFunc2).toBeDefined();
    });
  });

  describe('deepCopy', function(){
    const {deepCopy} = require('../utils');
    test('should export a function', function() {
      expect(typeof deepCopy).toBe('function');
    });

    test('should return array type if input is an array', function() {
      let obj1 = [
        {
          name: 'test1',
          test1: false
        },
        {
          name: 'test2',
          test2: true
        }
      ];

      let result = deepCopy(obj1);

      expect(typeof result).toBe(typeof obj1);
    });

    test('should return object type if input is an object', function() {
      let obj1 = {
          name: 'test1',
          test1: false
        };
      let result = deepCopy(obj1);

      expect(typeof result).toBe(typeof obj1);
    });

    test('should return object type if input is a date', function() {
      let obj1 = {
        d: new Date()
      }
      let result = deepCopy(obj1);

      expect(typeof result).toBe(typeof obj1);
      expect(result.d).toEqual(obj1.d);
    });

    test('should deeply copy an object', function() {
      let obj = {
        name: 'test',
        test: false,
        config: {
          host: 'test.com',
          port: 3000,
          deepConfig: {
            db: 0,
            ssl: false
          },
          cache: {
            type: 'test'
          }
        }
      };

      let result = deepCopy(obj);

      expect(result.config.port).toBe(obj.config.port);
      expect(result.config.host).toBe(obj.config.host);
      expect(result.config.deepConfig.db).toBe(obj.config.deepConfig.db);
      expect(result.config.deepConfig.ssl).toBe(obj.config.deepConfig.ssl);
      expect(result.config.cache.type).toBe(obj.config.cache.type);
    });

    test('should deeply copy an array of objects', function() {
      let arr = [
        {
          name: 'test',
          test: false,
          config: {
            host: 'test.com',
            port: 3000,
            deepConfig: {
              db: 0,
              ssl: false
            },
            cache: {
              type: 'test'
            }
          }
        },
        {
          name: 'test2',
          test: false,
          config: {
            host: 'test2.com',
            port: 4000,
            deepConfig: {
              db: 1,
              ssl: true
            },
            cache: {
              type: 'test2'
            }
          }
        }
      ];

      let result = deepCopy(arr);

      expect(result.length).toEqual(arr.length);
      expect(result[0].config.port).toBe(arr[0].config.port);
      expect(result[0].config.host).toBe(arr[0].config.host);
      expect(result[1].config.deepConfig.db).toBe(arr[1].config.deepConfig.db);
      expect(result[1].config.deepConfig.ssl).toBe(arr[1].config.deepConfig.ssl);
      expect(result[1].config.cache.type).toBe(arr[1].config.cache.type);
    });

    test('should copy the object correctly, not reference copy', function() {
      // Making sure it's actually copy
      // and not reference copy
      let tree = {
        'left'  : { 'left' : null, 'right' : null, 'data' : 3 },
        'right' : null,
        'data'  : 8
      };

      let result = deepCopy(tree);

      // There are not a same object in memory
      expect(result).not.toBe(tree);
      expect(result.left).toEqual(tree.left);
      expect(result.right).toEqual(tree.right);

      // Now changing the source object,
      // but result should not be changed
      tree.right = tree.left;

      // There are still not a same object in memory
      expect(result).not.toBe(tree);
      expect(result.left).toEqual(tree.left);
      expect(result.right).toEqual(null);
      expect(result.right).not.toEqual(tree.right);
    });

    test('should copy the object correctly, nested object structure', function() {
      // Mutating a source object should have
      // no effect on the result object
      function Circ() {
        this.me = this;
      }

      function Nested(y) {
        this.y = y;
      }

      let a = {
        x: 'a',
        circ: new Circ(),
        nested: new Nested('a')
      };

      let b = deepCopy(a);

      // There are not a same object in memory
      expect(a).not.toBe(b);
      expect(a.x).toEqual(b.x);
      expect(a.nested.y).toEqual(b.nested.y);

      b.x = 'b';
      b.nested.y = 'b';

      // There are still not a same object in memory
      expect(a).not.toBe(b);
      expect(a.x).toEqual('a');
      expect(b.x).toEqual('b');
      expect(a.nested.y).not.toEqual(b.nested.y);
    });

      test('should copy the object correctly, not mutate', function() {
      // Mutating a source object should have
      // no effect on the result object
      let a = {
        test: '1'
      };

      let b = {
        example: '2'
      };

      let test1 = deepCopy(a);
      let test2 = deepCopy(b);

      expect(a).not.toBe(b);
      expect(test1).not.toBe(test2);

      expect(typeof a.example).toBe('undefined');
      expect(typeof test1.example).toBe('undefined');

      expect(typeof b.test).toBe('undefined');
      expect(typeof test2.test).toBe('undefined');

      expect(test1.test).toEqual(a.test);
      expect(test2.example).toEqual(b.example);
    });
  });

  describe('isIEBrowser Method', () => {
    const {isIEBrowser} = require('../utils');

    test('should return true if IE10', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'MSIE 10' // customized appVersion
      });

      expect(isIEBrowser('ie10')).toEqual(true);
      expect(isIEBrowser('ie11')).toEqual(false);
      expect(isIEBrowser('edge')).toEqual(false);
    });

    test('should return true if IE11', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'Trident' // customized appVersion
      });

      expect(isIEBrowser('ie11')).toEqual(true);
      expect(isIEBrowser('ie10')).toEqual(false);
      expect(isIEBrowser('edge')).toEqual(false);
    });

    test('should return true if edge', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'Edge' // customized appVersion
      });

      expect(isIEBrowser('edge')).toEqual(true);
      expect(isIEBrowser('ie10')).toEqual(false);
      expect(isIEBrowser('ie11')).toEqual(false);
    });
  });

  describe('detectIEVersion Method', () => {
    const {detectIEVersion} = require('../utils');

    test('should return true if IE10+ detected', () => {
      navigator.__defineGetter__('userAgent', function(){
        return 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)' // customized appVersion
      });

      let result = detectIEVersion();
      expect(result).toBe(10);
    });

    test('should return true if IE11 detected', () => {
      navigator.__defineGetter__('userAgent', function(){
        return 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko' // customized appVersion
      });

      let result = detectIEVersion();
      expect(result).toBe(11);
    });

    test('should return true if Edge 12 detected', () => {
      navigator.__defineGetter__('userAgent', function(){
        return 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0' // customized appVersion
      });

      let result = detectIEVersion();
      expect(result).toBe(12);
    });

    test('should return true if Edge 13 detected', () => {
      navigator.__defineGetter__('userAgent', function(){
        return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586' // customized appVersion
      });

      let result = detectIEVersion();
      expect(result).toBe(13);
    });
  });
});
