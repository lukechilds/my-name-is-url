import test from 'ava';

import Urls from '../dist/my-name-is-url';
import Parser from '../dist/parser';
import regex from '../dist/regex';

import grabbable from './fixtures/grabbable.json';
import matches from './fixtures/matches.json';
import nonMatches from './fixtures/non-matches.json';

test('Urls() should return instance of parser', t => {
  t.true(Urls() instanceof Parser);
});

test('Urls() should expose regex as property', t => {
  t.is(Urls.regex, regex);
});

test('.get() should always return an array', t => {
  t.true(Urls().get() instanceof Array);
  t.true(Urls('').get() instanceof Array);
  t.true(Urls('no url').get() instanceof Array);
  t.true(Urls('url.com').get() instanceof Array);
});

test('.get() should match a url', t => {
  t.deepEqual(Urls('url.com').get(), ['url.com']);
});

test('.filter() should throw error if filter callback is invalid', t => {
  t.throws(() => Urls().filter());
});

test('.filter() should filter matching urls', t => {
  const filteredUrl = Urls('hello url.com world').filter(url => `<url>${url}</url>`);
  t.is(filteredUrl, 'hello <url>url.com</url> world');
});

grabbable.forEach(grab => {
  test(`Grabbable: ${grab.description}`, t => t.deepEqual(Urls(grab.text).get(), grab.matches));
});

matches.forEach(match => {
  test(`Match: ${match.description}`, t => t.deepEqual(Urls(match.url).get(), [match.url]));
});

nonMatches.forEach(nonMatch => {
  test(`Non Match: ${nonMatch.description}`, t => t.deepEqual(Urls(nonMatch.url).get(), []));
});
