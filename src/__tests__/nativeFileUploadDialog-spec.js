/* eslint-disable */

describe('NativeFileUploadDialog Library',  () => {
   const testFile = {
      lastModified: 1488557833000,
      lastModifiedDate: Date.now(),
      name: "javascriptlogo-2.jpg",
      size: 37716,
      type: "image/jpeg"
   };

   let NativeFileUploadDialog;
   let chromeBrowser = '5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';

   beforeEach(() => {
      NativeFileUploadDialog = require('../NativeFileUploadDialog').default;
      jest.resetModules();
   });

   test('should return true if IE10 is detected', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'MSIE 10' // IE10
      });

      let result = new NativeFileUploadDialog('image/*');

      expect(result.isIE10).toEqual(true);
      expect(result.isIE11).toEqual(false);
      expect(result.isEdge).toEqual(false);
   });

   test('should return true if IE11 is detected', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'Trident' // IE11
      });

      let result = new NativeFileUploadDialog('image/*');
      expect(result.isIE11).toEqual(true);
      expect(result.isIE10).toEqual(false);
      expect(result.isEdge).toEqual(false);
   });

   test('should return true if Edge is detected', () => {
      navigator.__defineGetter__('appVersion', function(){
        return 'Edge' // Edge
      });

      let result = new NativeFileUploadDialog('image/*');
      expect(result.isEdge).toEqual(true);
      expect(result.isIE10).toEqual(false);
      expect(result.isIE11).toEqual(false);
   });

   test('should return true when browser type is Chrome or else', () => {
      navigator.__defineGetter__('appVersion', function(){
        return chromeBrowser // Chrome
      });

      let result = new NativeFileUploadDialog('image/*');
      expect(result.isIE10).toEqual(false);
      expect(result.isIE11).toEqual(false);
      expect(result.isEdge).toEqual(false);
   });

   test('should return true when browser type is Chrome', () => {
      navigator.__defineGetter__('appVersion', function(){
        return chromeBrowser // Chrome
      });

      let fn = jest.fn(() => {
         this._callback(testFile);
      });

      let NativeFileUpload = new NativeFileUploadDialog('image/*');

      expect(NativeFileUpload._callback).not.toBeDefined();
      // Simulate the upload file behaviour
      NativeFileUpload.open().thenWith(fn);

      expect(NativeFileUpload._callback).toBeDefined();
   });
});













