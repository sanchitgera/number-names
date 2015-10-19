var cache = require('./lib/cache');
var lots = require('./lib/lots');
var bigNumber = require('big-integer');

var n2w = function(num) {
  number = bigNumber(num, 10);
  var o = '';

  if (number.isNegative()) {
    o += 'negative ';
    number = number.abs();
  }

  if (number.isZero()) {
    o += 'zero';
  } else {
    var sets = [];
    var i = 0;
    var f = false;

    while (!number.equals(0)) {

      divmod = number.divmod(1000);
      number = divmod.quotient;
      r = divmod.remainder;

      if (!(r.equals(0) || i === 0)) {
        sets.push(lots[i] + (!(sets.length === 0) ? (f ? ' and' : ',') : ''));
      }

      if (i === 0 && r.lt(100)) {
        f = true;
      }

      if (!r.equals(0)) {
        sets.push(cache[r]);
      }
      i = i + 1;
    }
    o += sets.reverse().join(' ');
  }

  return o;
}

module.exports = n2w;
