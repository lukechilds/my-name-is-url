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

}
