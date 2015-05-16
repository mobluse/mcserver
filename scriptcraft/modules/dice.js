/*

*/

exports.roll = function roll(sides) {
  if ( typeof sides === 'undefined' ) {
    sides = 6;
  }
  var result = Math.random();
  result *= sides;
  result = Math.floor(result);
  return result;
};

