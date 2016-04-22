# my-name-is-url [![Build Status](https://travis-ci.org/lukechilds/my-name-is-url.svg?branch=master)](https://travis-ci.org/lukechilds/my-name-is-url)
Intelligently finds many different url formats in a string. Works in browser and node.

## About
In a nutshell, `my-name-is-url` is an Intelligent parser that searches a string of text for urls. The url spec is so vague that almost anything _could_ be a url. The regular expression used in `my-name-is-url` tries to match patterns likely to represent a url in a sentence rather than matching the actual url spec.

> ❗️**Important note**
>
> If you're trying to parse a url into sections (scheme,host) or check a url is valid this module isn't for you. This module is intended to search text for urls.

## Install
```shell
$ npm install --save my-name-is-url
```
or
```shell
$ jspm install npm:my-name-is-url
```
