var cache = require('./lib/cache');
var lots = require('./lib/lots');
var bigNumber = require('bignumber.js');

var n2w = function(num) {
  var number = new bigNumber(num);

  var temp = number;
  number = number.trunc();
  var o = '';

  if (number.lt(0)) {
    o += 'negative ';
    number = number.times(-1);
  }

  if (number.equals(0)) {
    o += 'zero';
  } else {
    var sets = [];
    var i = 0;
    var f = false;

    while (!number.equals(0)) {

      r = number.mod(1000);
      number = number.dividedBy(1000).floor();

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

  var decimal = temp.mod(1).toString();
  if(decimal !== '0') {
    decimal = decimal.split('.')[1];
    o += ' point'
    // The number has a decimal portion
    decimal.split('').forEach(function(digit) {
      o += ' ' + cache[digit];
    });
  }
  return o;
}

module.exports = n2w;
