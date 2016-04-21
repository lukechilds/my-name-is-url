import tlds from 'tlds';

// Reusables
const escapeChar = `\\`;
const notWhitespaceOrComma = `[^${escapeChar}s,]`;
const notWhitespaceCommaOrDot = `[^${escapeChar}s,.]`;
const WhitespaceCommaDotOrEndOfLine = `[${escapeChar}s,.]|$`;
const number = `[0-9]`;

// Sections
const hostname = `(${notWhitespaceOrComma}*${escapeChar}.(${tlds.join('|')}))`;
const ip = `(${number}{1,3}${escapeChar}.){3}${number}{1,3}`;
const optionalPortNumber = `(:${number}+)?`;
const optionalSlash = `(${escapeChar}/(${notWhitespaceCommaOrDot}*)?)?`;
const endsWithButDontMatch = `(?=${WhitespaceCommaDotOrEndOfLine})`;

// Build
const regex = `(localhost|${hostname}|${ip})${optionalPortNumber}${optionalSlash}${endsWithButDontMatch}`;

export default new RegExp(regex, 'gi');
