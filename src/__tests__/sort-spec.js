/* eslint-disable */
import { compareDates, sortBy, sortByDates } from '../sort';

describe('Sort Library', () => {
  describe('compareDates Method', () => {

    test('should return true if 32bit integer generated', () => {
      let diff = 5;
      let date1 = Date.now();
      let date2 = date1 + diff;

      let result = compareDates(date2, date1);

      expect(typeof result).toEqual('number');
      expect(result).toEqual(diff);
    });
  });
  describe('Sort Methods', () => {
    test('should return true if sorted by dates correctly', () => {
      let arr1 = [{
        name: 'sample1',
        desc: 'disc1',
        updated_at: Date.now()
      }, {
        name: 'sample2',
        desc: 'disc2',
        updated_at: Date.now() - 100
      }, {
        name: 'sample3',
        desc: 'disc3',
        updated_at: Date.now() - 50
      }, {
        name: 'sample4',
        desc: 'disc4',
        updated_at: Date.now() + 20
      }];

      let arr2 = arr1.slice(0);
      arr1.sort(sortByDates('-updated_at'));

      expect(arr2).not.toEqual(arr1);
      expect(arr1[0].name).toEqual('sample4');
    });

    test('should return true if sorted by correctly', () => {
      let arr1 = [{
        name: 'sample1',
        age: 40
      }, {
        name: 'sample2',
        age: 30
      }, {
        name: 'sample3',
        age: 80
      }, {
        name: 'sample4',
        age: 20
      }];

      let arr2 = arr1.slice(0);
      arr1.sort(sortBy('-age')).reverse();

      expect(arr2).not.toEqual(arr1);
      expect(arr1[0].name).toEqual('sample4');
    });
  });
});
