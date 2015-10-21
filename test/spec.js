var n2w = require('../index');
var expect = require('chai').expect;
var cases = require('./cases').base;
var adv = require('./cases').advanced;
var float = require('./cases').float;


describe('number-names spec', function() {
  it('matches numbers under 15 significant digits', function(){
    cases.forEach(function(casee) {
      expect(n2w(casee[0].toString())).to.eq(casee[1]);
    });
  });

  it('matches numbers over 15 significant digits', function(){
    adv.forEach(function(casee) {
      expect(n2w(casee[0].toString())).to.eq(casee[1]);
    });
  });

  it('matches floating point numbers', function(){
    float.forEach(function(casee) {
      expect(n2w(casee[0].toString())).to.eq(casee[1]);
    });
  });
});
