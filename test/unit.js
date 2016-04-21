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
