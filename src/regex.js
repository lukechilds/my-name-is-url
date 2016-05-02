import tlds from 'tlds';

// Reusables
const validTlds = tlds.concat(['local', 'dev']).join('|');
const escapeChar = `\\`;
const containingChars = `${escapeChar}s<>".,`;
const notWhitespaceCommaDoubleQuoteOrDot = `[^${escapeChar}s,".]`;
const containingCharsOrEOL = `[${containingChars}]|$`;
const number = `[0-9]`;

// Sections
const optionalScheme = `((https?:)?//)?`;
const hostname = `(([^${escapeChar}W]{1}[${escapeChar}w-]*[^-]${escapeChar}.)+(${validTlds}))`;
const ip = `(${number}{1,3}${escapeChar}.){3}${number}{1,3}`;
const optionalPortNumber = `(:${number}+)?`;
const optionalSlash = `(${escapeChar}/(${notWhitespaceCommaDoubleQuoteOrDot}*)?)?`;
const endsWithButDontMatch = `(?=${containingCharsOrEOL})`;

// Build
const regex = `${optionalScheme}(localhost|${hostname}|${ip})${optionalPortNumber}${optionalSlash}${endsWithButDontMatch}`;

export default new RegExp(regex, 'gi');
