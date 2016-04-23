# my-name-is-url [![Build Status](https://travis-ci.org/lukechilds/my-name-is-url.svg?branch=master)](https://travis-ci.org/lukechilds/my-name-is-url) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/my-name-is-url/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/my-name-is-url?branch=master) [![Issue Count](https://codeclimate.com/github/lukechilds/my-name-is-url/badges/issue_count.svg)](https://codeclimate.com/github/lukechilds/my-name-is-url)
[![codecov.io](https://codecov.io/github/lukechilds/my-name-is-url/coverage.svg?branch=master)](https://codecov.io/github/lukechilds/my-name-is-url?branch=master)

Intelligently finds many different url formats in a string. For the browser and node.

## About

In a nutshell, `my-name-is-url` is an intelligent parser that searches a string of text for urls. The url spec is so vague that many strings _could_ be a url so matching the spec directly results in a lot of false positives. The regular expression used in `my-name-is-url` tries to match patterns likely to represent a url in a sentence rather than matching the actual url spec.

> ❗️**Important note**
>
> If you're trying to parse a url into sections (scheme,host) or check a url is valid this module isn't for you. This module is intended to find urls in a string.

## Install

```shell
npm install --save my-name-is-url
```

or

```shell
jspm install npm:my-name-is-url
```

## Matches

`my-name-is-url` matches many different url patterns:

```
With http://                             -> http://url.com
With https://                            -> https://url.com
With //                                  -> //url.com
With no scheme                           -> url.com
With any valid gTLD                      -> url.website
With .local TLD                          -> url.local
With .dev TLD                            -> url.dev
With trailing slash                      -> url.com/
With port number                         -> url.com:8080
IP address                               -> 192.168.0.1
Localhost                                -> localhost
With slug                                -> url.com/slug
With hash                                -> url.com/#hash
With query string                        -> url.com/?foo
With query string with value             -> url.com/?foo=bar
With query string with multiple values   -> url.com/?foo=bar&hello=world
With complex query string                -> url.com/?foo[]=bar&foo[]=helloworld
With url encoded string                  -> url.com/Test+url+encoding+with+symbols+!%40£%24%25^%26*()_%2B
```

Whilst excluding patterns you probably don't want to match:

```
Dot seperated string without a valid TLD -> url.notatld
Url with extra chars after a valid TLD   -> url.comextrachars
Url without dot                          -> urlcom
Url with semicolon but no port number    -> url.com:
```

It also doesn't choke on punctuation, these urls are successfully found regardless of the commas and period:

```js
const text = 'Check out these sites: site1.com,site2.com,site3.com.';

Urls(text).get();
// ['site1.com', 'site2.com', 'site3.com']
```

## Usage

### Importing

CommonJS

```js
var Urls = require('my-name-is-url');
```

ES6

```js
import Urls from 'my-name-is-url';
```

### Regex

If you just wanna do your own thing the regex used internally is helpfully exposed

```js
const UrlRegex = Urls.regex;
```

### Get Urls

The `get()` method returns an array of urls in a string

```js
const text = 'Check out these sites: site1.com,site2.com,site3.com';

Urls(text).get();
// ['site1.com', 'site2.com', 'site3.com']
```

### Filter Urls

The `filter()` method runs a filter on each url in a string

```js
const text = 'My GitHub profile: https://github.com/lukechilds';

Urls(text).filter(url => `<a href="${url}">${url}</a>`);
// 'My GitHub profile: <a href="https://github.com/lukechilds">https://github.com/lukechilds</a>'
```

> 👍 **Pro tip**
>
> You can get a parser instance by calling `Urls()` or `new Urls`, whichever you prefer.

## License

MIT © Luke Childs
