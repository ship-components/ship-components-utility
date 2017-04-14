/* eslint-disable */
describe('Collections Library',  () => {
   describe('keys method', () => {
      const {keys} = require('../collections');

      test('should return true if correct keys generated', () => {
         let obj = {
            name: 'test',
            value: 'sample',
            age: 20
         }

         let result = keys(obj);
         expect(Array.isArray(result)).toEqual(true);
         expect(result[0]).toEqual('name');
         expect(result[1]).toEqual('value');
         expect(result[2]).toEqual('age');
      });
   });

   describe('toArray method', () => {
      const {toArray} = require('../collections');

      test('should return true if correct values generated', () => {
         let obj = {
            name: 'test',
            value: 'sample',
            age: 20
         }

         let result = toArray(obj);
         expect(Array.isArray(result)).toEqual(true);
         expect(result[0]).toEqual('test');
         expect(result[1]).toEqual('sample');
         expect(result[2]).toEqual(20);
      });
   });

   describe('searchFn method', () => {
      const {searchFn} = require('../collections');

      test('should return true if func is found', () => {
         let obj = {
            func1: function() {},
            func2: function() {},
            func3: function() {}
         }

         let result1 = searchFn(obj.func1);
         let result2 = searchFn(obj.func2);
         let result3 = searchFn(obj.func3);

         expect(typeof result1).toEqual('function');
         expect(typeof result2).toEqual('function');
         expect(typeof result3).toEqual('function');
      });
   });

   describe('any method', () => {
      const {any} = require('../collections');

      test('should return true if if any function works correctly', () => {
         let compare = function(a, b) {
            return a === b;
         }

         let arr = [20, 30];
         let result = any(arr, compare);

         expect(result).toBe(false);
      });
   });

   describe('find method', () => {
      const {find} = require('../collections');

      test('should return true if match is found', () => {
         let compare = function(a) {
            return a === 20;
         }

         let arr = [20, 30];
         let result = find(arr, compare);

         expect(result).toEqual(20);
      });
   });

   describe('findIndex method', () => {
      const {findIndex} = require('../collections');

      test('should return true if ', () => {
         let compare = function(a) {
            return a === 30;
         }

         let arr = [20, 30];
         let result = findIndex(arr, compare);

         expect(result).toEqual(1);
      });
   });

   describe('getIn and hasIn methods', () => {
      const {hasIn, getIn} = require('../collections');

      const testMap = {
         obj1: {
            name: 'test1',
            value: 'sample1',
            age: 20
         },
         obj2: {
            name: 'test2',
            value: 'sample2',
            age: 30,
            obj3: {
               name: 'test3',
               value: '',
               age: 40
            }
         }
      };

      test('should return true if the getIn nested value found matches result', () => {
         let result1 = getIn(['obj1', 'name'], testMap); // test1
         let result2 = getIn(['obj2', 'value'], testMap); // sample2
         let result3 = getIn(['obj2', 'obj3', 'age'], testMap); // 40

         expect(result1).toEqual('test1');
         expect(result2).toEqual('sample2');
         expect(result3).toEqual(40);
      });

      test('should return true if the hasIn found the match', () => {
         let result1 = hasIn(['obj1', 'name'], testMap); // true
         let result2 = hasIn(['obj2', 'value'], testMap); // true
         let result3 = hasIn(['obj2', 'obj3', 'desc', 'bad'], testMap); // false
         let result4 = hasIn(['obj4', 'name'], testMap); // false

         expect(result1).toEqual(true);
         expect(result2).toEqual(true);
         expect(result3).toEqual(false);
         expect(result4).toEqual(false);
      });

      test('it should return the default value if it can not find the path', ()=>{
        let src = {
          App: {
            initial: {}
          }
        }
        const defaultValue = [];
        const result = getIn(['App', 'initial', 'value'], src, defaultValue);
        expect(result).toBe(defaultValue);
      });

      test('it should return the default value if the src is not an object or path is not an Array', ()=>{
        const defaultValue = [];
        const notAnObject = getIn([], void 0, defaultValue);
        const notAnArray = getIn({}, {}, defaultValue);
        expect(notAnObject).toBe(defaultValue);
        expect(notAnArray).toBe(defaultValue);
      });

      test('if the path is empty return the src', ()=>{
        const src = {
          test: true
        };
        const result = getIn([], src);
        expect(result).toBe(src);
      });
   });

   describe('isEqual method', () => {
      const {isEqual} = require('../collections');
      const testObj1 = {
         obj1: {
            name: 'test',
            value: 'sample'
         },
         obj2: { name: 'test2'}
      };
      const testObj2 = {
         obj1: {
            name: 'test',
            value: 'sample'
         },
         obj2: { name: 'test2'}
      };
      const testObj3 = {
         obj4: {
            name: 'test1',
            value: 'sample1'
         },
         obj5: { obj6: { name: 'test5' }}
      };

      test('should return true if 2 objects are the same size & values', () => {
         let result = isEqual(testObj1, testObj2); // true
         expect(result).toEqual(true);
      });

      test('should return false if 2 objects are not same', () => {
         let result = isEqual(testObj1, testObj3); // false
         expect(result).toEqual(false);
      });
   });
});
