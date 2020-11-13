/* global describe, test, expect */
import pluck from '../pluck';

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

  test('it should only copy keys in the src object', () => {
    let src = {
      key: 'ship-components',
      exists: void 0
    };
    let result = pluck(src, ['name', 'exists']);
    expect('name' in result).toBe(false);
    expect('exists' in result).toBe(true);
  });

  test('it should throw an error if the src argument is not an object', () => {
    expect(() => {
      pluck(true, ['key']);
    }).toThrow();
  });

  test('it should throw an error if the fields argument is not an array', () => {
    expect(() => {
      pluck({}, { key: true});
    }).toThrow();
  });
});
