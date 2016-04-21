var expect = require('chai').expect;

var Urls = require('../dist/my-name-is-url');
var Parser = require('../dist/parser');
var regex = require('../dist/regex');

describe('Urls()', function() {

  it('Should return instance of parser', function () {
    expect(Urls()).to.be.an.instanceof(Parser);
  });

  it('Should expose regex as property', function () {
    expect(Urls.regex).to.equal(regex);
  });

});
