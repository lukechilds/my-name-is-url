import regex from './regex';

// Factory function to return parser instance
export default class Urls {

  constructor(text = null) {
    this.text = text;
  }

  get() {

    // Make sure we have a string
    if(typeof this.text !== 'string') {
      this.text = '';
    }

    // Always return array
    return this.text.match(regex) || [];
  }

  filter(cb) {

    // Check we've got something we can parse
    if(typeof this.text !== 'string') {
      return '';
    }

    // Check callback is a funciton
    if(typeof cb !== 'function') {
      throw new Error('Invalid filter callback');
    }

    // Run filter on urls
    return this.text.replace(regex, cb);
  }

}
