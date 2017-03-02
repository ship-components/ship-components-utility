/* eslint-disable */

describe('Sort Library', () => {
  describe('compareDates Method', () => {
    const {compareDates} = require('../sort');

    test('should return true if 32bit integer generated', () => {
      let diff = 5;
      let date1 = Date.now() + diff;
      let date2 = Date.now();

      let result = compareDates(date1, date2);

      expect(typeof result).toEqual('number');
      expect(result).toEqual(diff);
    });
  });
});
