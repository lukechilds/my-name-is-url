var expect = require('chai').expect;

var Urls = require('../dist/my-name-is-url');
var Parser = require('../dist/parser');
var regex = require('../dist/regex');

var matches = require('./matches.json');
var nonMatches = require('./non-matches.json');

describe('Urls()', function() {

  it('Should return instance of parser', function () {
    expect(Urls()).to.be.an.instanceof(Parser);
  });

  it('Should expose regex as property', function () {
    expect(Urls.regex).to.equal(regex);
  });

  describe('.get()', function() {

    it('Should always return an array', function () {
      expect(Urls().get()).to.be.instanceof(Array);
      expect(Urls('').get()).to.be.instanceof(Array);
      expect(Urls('no url').get()).to.be.instanceof(Array);
      expect(Urls('url.com').get()).to.be.instanceof(Array);
    });

    it('Should match a url', function () {
      expect(Urls('url.com').get()).to.deep.equal(['url.com']);
    });

  });

  describe('.filter()', function() {

    it('Should throw error if filter callback is invalid', function () {
      expect(function() { Urls().filter() }).to.throw(Error);
    });

    it('Should filter matching urls', function () {
      expect(Urls('hello url.com world').filter(function(url) {
        return '<url>' + url + '</url>';
      })).to.equal('hello <url>url.com</url> world');
    });

  });

  describe('Should match', function() {

    matches.forEach(function(match) {
      it(match.description, function () {
        expect(Urls(match.url).get()).to.deep.equal([match.url]);
      });
    });

  });

  describe('Should not match', function() {

    nonMatches.forEach(function(nonMatch) {
      it(nonMatch.description, function () {
        expect(Urls(nonMatch.url).get()).to.deep.equal([]);
      });
    });

  });

});
