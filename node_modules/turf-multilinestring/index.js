/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @module turf/multilinestring
 * @category helper
 * @param {Array<Array<Number>>} coordinates an array of Positions
 * @param {Object=} properties an Object of key-value pairs to add as properties
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multilinestring([[0,0],[10,10]]);
 *
 * //=multiLine
 *
 */
module.exports = function(coordinates, properties) {
  if (!coordinates) {
    throw new Error('No coordinates passed');
  }
  return {
    "type": "Feature",
    "geometry": {
      "type": "MultiLineString",
      "coordinates": coordinates
    },
    "properties": properties || {}
  };
};