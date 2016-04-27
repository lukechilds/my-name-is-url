import tlds from 'tlds';

// Reusables
const validTlds = tlds.concat(['local', 'dev']).join('|');
const escapeChar = `\\`;
const notWhitespaceHTMLOrComma = `[^${escapeChar}s<>,]`;
const notWhitespaceCommaOrDot = `[^${escapeChar}s,.]`;
const WhitespaceCommaDotHTMLOrEndOfLine = `[${escapeChar}s,.<>]|$`;
const number = `[0-9]`;

// Sections
const optionalScheme = `((https?:)?//)?`;
const hostname = `(${notWhitespaceHTMLOrComma}+${escapeChar}.(${validTlds}))`;
const ip = `(${number}{1,3}${escapeChar}.){3}${number}{1,3}`;
const optionalPortNumber = `(:${number}+)?`;
const optionalSlash = `(${escapeChar}/(${notWhitespaceCommaOrDot}*)?)?`;
const endsWithButDontMatch = `(?=${WhitespaceCommaDotHTMLOrEndOfLine})`;

// Build
const regex = `${optionalScheme}(localhost|${hostname}|${ip})${optionalPortNumber}${optionalSlash}${endsWithButDontMatch}`;

export default new RegExp(regex, 'gi');
