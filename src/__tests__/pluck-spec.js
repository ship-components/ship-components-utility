/* global describe, test, expect */
const pluck = require('../pluck').default;

describe('pluck', () => {
  test('it should return a new object with only the keys specified', () => {
    let src = {
      key: 'ship-components',
      name: 'SHIP Components'
    };
    let result = pluck(src, ['key']);
    expect(result).not.toBe(src);
    expect(result.key).toBe(src.key);
    expect(typeof result.name).toBe('undefined');
  });

  test('it should throw an error if the src argument is not an object', () => {
    expect(()=>{
      pluck(true, ['key']);
    }).toThrow();
  });

  test('it should throw an error if the fields argument is not an array', () => {
    expect(()=>{
      pluck({}, { key: true});
    }).toThrow();
  });
});
