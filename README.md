# my-name-is-url [![Build Status](https://travis-ci.org/lukechilds/my-name-is-url.svg?branch=master)](https://travis-ci.org/lukechilds/my-name-is-url) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/my-name-is-url/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/my-name-is-url?branch=master) [![Issue Count](https://codeclimate.com/github/lukechilds/my-name-is-url/badges/issue_count.svg)](https://codeclimate.com/github/lukechilds/my-name-is-url)

Intelligently finds many different url formats in a string. For the browser and node.

## About

In a nutshell, `my-name-is-url` is an intelligent parser that searches a string of text for urls. The url spec is so vague that almost anything _could_ be a url. The regular expression used in `my-name-is-url` tries to match patterns likely to represent a url in a sentence rather than matching the actual url spec.

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

Urls(text).get(); // Returns:

['site1.com', 'site2.com', 'site3.com']
```

### Filter Urls

The `filter()` method runs a filter on each url in a string

```js
const text = 'My GitHub profile: https://github.com/lukechilds';

Urls(text).filter(url => `<a href="${url}">${url}</a>`); // Returns:

'My GitHub profile: <a href="https://github.com/lukechilds">https://github.com/lukechilds</a>'
```

> **Pro tip**
>
> You can get a parser instance by calling `Urls()` or `new Urls`, whichever you prefer.

## License

MIT © Luke Childs
