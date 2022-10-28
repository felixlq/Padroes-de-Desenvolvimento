var test = require('tape');
var multilinestring = require('./')

test('multilinestring', function(t){
  t.deepEqual(multilinestring([[[0,0],[10,10]], [[5,0],[15,8]]]), {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [[[0,0],[10,10]], [[5,0],[15,8]]]
    }
  }, 'takes coordinates');

  t.deepEqual(multilinestring([[[0,0],[10,10]], [[5,0],[15,8]]], {test: 23}), {
    "type": "Feature",
    "properties": {
      test: 23
    },
    "geometry": {
      "type": "MultiLineString",
      "coordinates": [[[0,0],[10,10]], [[5,0],[15,8]]]
    }
  }, 'takes properties');


  t.throws(function(err){
    multilinestring();
  }, 'throws error with no coordinates');

  t.end();
});
