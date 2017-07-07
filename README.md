# my-name-is-url [![Build Status](https://travis-ci.org/lukechilds/my-name-is-url.svg?branch=master)](https://travis-ci.org/lukechilds/my-name-is-url) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/my-name-is-url/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/my-name-is-url?branch=master)

Intelligently recognises many different url formats in a string. For the browser and node. [Here, have a play](http://lukechilds.github.io/my-name-is-url).

## About

`my-name-is-url` was created because I couldn't find a parser with a high enough success rate. The url spec is so vague that many strings _could_ be a url, therefore matching the spec directly results in a lot of false positives. Most parsers get around this by requiring a url to contain a scheme to be matched as a url.

The regular expression used in `my-name-is-url` tries to match patterns likely to represent a url in a sentence rather than matching the actual url spec. This results in a much wider scope of matchable urls than most other parsers without introducing loads of false positives.

> ❗️**Important note**
>
> If you're trying to parse a url into sections (scheme,host) or check a url is valid this module isn't for you. This module is intended to find urls in a string.

## Install

```shell
npm install --save my-name-is-url
```

or

```shell
jspm install my-name-is-url
```

## Usage

```js
import Urls from 'my-name-is-url';

const getText = 'Check out these sites: foobar.com,//foo.ninja,http://bar.com.';
Urls(getText).get();
// [ 'foobar.com', '//foo.ninja', 'http://bar.com' ]

const filterText = 'My GitHub profile: https://github.com/lukechilds';
Urls(filterText).filter(url => `<a href="${url}">${url}</a>`);
// 'My GitHub profile: <a href="https://github.com/lukechilds">https://github.com/lukechilds</a>'
```

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

If you just wanna do your own thing the regex used internally is helpfully exposed.

```js
var urlRegex = require('my-name-is-url').regex;
```

or

```js
import { regex as urlRegex } from 'my-name-is-url';
```

## API

### regex

The regex used internally for matching urls.

### get()

Returns an array of url matches. If there are no matches an empty array will be returned.

```js
const text = 'Check out these sites: foobar.com,//foo.ninja,http://bar.com.';

Urls(text).get();
// [ 'foobar.com', '//foo.ninja', 'http://bar.com' ]
```

### filter(cb)

Runs a filter callback on each url in a string.

#### cb

*Required*

Type: `function`

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
