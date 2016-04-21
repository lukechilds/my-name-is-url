import regex from './regex';

// Factory function to return parser instance
export default class Urls {

  constructor(text = null) {
    this.text = text;
  }

  get() {
    return this.text.match(regex);
  }

}
