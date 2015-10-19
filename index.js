var cache = require('./lib/cache');
var lots = require('./lib/lots');

Array.prototype.chunk = function(chunkSize) {
  var array = this;
  return [].concat.apply([],
    array.map(function(elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    })
  );
}

var n2w = function(num) {
  var number = parseInt(num.toString(), 10);
  console.log(number);
  var o = '';

  if (number < 0) {
    o += 'negative';
    number = Math.abs(number);
  }

  if (number === 0) {
    o += 'zero';
  } else {
    var sets = [];
    var i = 0;
    var f = false;

    while (number !== 0) {
      r = number % 1000;
      console.log(r);
      number = Math.floor(number / 1000);
      console.log(number);

      if (!(r === 0 || i === 0)) {
        sets.push(lots[i] + (!(sets.length > 0) ? (f ? ' and' : ',') : ''));
      }

      if (i === 0 && r < 100) {
        f = true;
      }

      if (r !== 0) {
        sets.push(cache[r]);
      }
      i = i + 1;
    }
    o += sets.reverse().join(' ');
  }

  return o;
}

module.exports = n2w;
