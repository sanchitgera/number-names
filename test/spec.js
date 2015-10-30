var n2w = require('../index');
var expect = require('chai').expect;
var cases = require('./cases').base;
var adv = require('./cases').advanced;
var float = require('./cases').float;


describe('number-names spec', function() {
  it('throws an error for large integers of number type', function() {
    expect(function() {
        n2w(1234567890123456);
      })
      .to.throw(Error);

    expect(function() {
        n2w('1234567890123456');
      })
      .to.not.throw(Error);
  });

  it('can turn off errors', function() {

  });

  it('matches numbers under 15 significant digits', function() {
    cases.forEach(function(tcase) {
      expect(n2w(tcase[0].toString())).to.eq(tcase[1]);
    });
  });

  it('matches numbers over 15 significant digits', function() {
    adv.forEach(function(tcase) {
      expect(n2w(tcase[0].toString())).to.eq(tcase[1]);
    });
  });

  it('matches floating point numbers', function() {
    float.forEach(function(tcase) {
      expect(n2w(tcase[0].toString())).to.eq(tcase[1]);
    });
  });
});
