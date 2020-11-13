/* eslint-disable */
import KeyEvents from '../KeyEvents';
import { objectSize } from '../utils';

describe('KeyEvents Library', () => {
   test('should return true if return the key event number correctly', () => {
      let event1 = 'DOM_VK_PAGE_DOWN';
      let eventNum1 = 34;

      let event2 = 'DOM_VK_ESCAPE';
      let eventNum2 = 27;

      let result1 = KeyEvents(event1);
      let result2 = KeyEvents(event2);
      let result3 = KeyEvents();

      expect(typeof result1).toEqual('number');
      expect(typeof result2).toEqual('number');
      expect(typeof result3).toEqual('object');

      expect(result1).toEqual(eventNum1);
      expect(result2).toEqual(eventNum2);
      // 115 key events nby default
      expect(objectSize(result3)).toEqual(115);
   });
});
