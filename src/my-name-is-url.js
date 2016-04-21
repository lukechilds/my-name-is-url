import Parser from './parser';
import regex from './regex';

// Factory function to return parser instance
const Urls = (text = null) => new Parser(text);

// Expose regex here for easy access
Urls.regex = regex;

export default Urls;
