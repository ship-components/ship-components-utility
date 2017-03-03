const {isIEBrowser} = require('./utils');

export default class NativeFileUploadDialog {

  constructor(type) {
    this.type = type;
    this.input = document.createElement('input');
    if (this.type) {
      this.input.setAttribute('accept', this.type);
    }
    this.input.setAttribute('style', 'visibility: hidden; opacity: 0; position: absolute;');
    this.input.setAttribute('type', 'file');
    // Check to see if browser is an IE10 or IE11 or edge
    this.isIE10 = isIEBrowser('ie10');
    this.isIE11 = isIEBrowser('ie11');
    this.isEdge = isIEBrowser('edge');
    // onChange event listener
    // Based on browser type
    if(this.isIE10 && this.input.attachEvent) {
      // IE 10
      this.input.attachEvent('onchange', this.onChange.bind(this), false);
    } else {
      // Other browsers including IE11
     this.input.addEventListener('change', this.onChange.bind(this), false);
    }
  }

  /**
   * Allow access to the input elment for other props
   * @param {String} prop
   * @param {String} val
   */
  setAttribute(prop, val) {
    this.input.setAttribute(prop, val);
    return this;
  }

  /**
   * Alias function for types
   * @param  {String} type
   */
  setType(type) {
    this.type = type;
    return this.setAttribute('type', type);
  }

  /**
   * Show the dialog
   */
  open() {
    if (this.type) {
      this.input.setAttribute('accept', this.type);
    }

    document.body.appendChild(this.input);
    this.input.click();

    return this;
  }

  thenWith(callback) {
    this._callback = callback;

    // Callback needs to fire here when using IE10 or IE11
    // Reason: onChange event fires first
    // Gets the files (IF ANY), then
    // thenWith function fires
    if((this.isIE10 || this.isIE11 || this.isEdge) && typeof this.files !== 'undefined') {
      this._callback(this.files);
    }
  }

  onChange(event) {
    this.event = event;

    // Grab the uploaded files
    if(this.isIE10) {
      // IE10
      this.files = event.srcElement.files;
    } else {
      // Other browsers including IE11
     this.files = event.target.files;
    }

    // Callback fires when not using IE10 browser
    // callback is undefined for IE10 at this stage
    if (typeof this._callback === 'function') {
      this._callback(this.files);
    }

    this.input.parentNode.removeChild(this.input);
  }
}
