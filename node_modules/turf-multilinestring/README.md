# turf-multilinestring

[![build status](https://secure.travis-ci.org/Turfjs/turf-multilinestring.png)](http://travis-ci.org/Turfjs/turf-multilinestring)

turf multilinestring module


### `turf.multilinestring(coordinates, properties)`

Creates a Feature based on a
coordinate array. Properties can be added optionally.


### Parameters

| parameter     | type                         | description                                                   |
| ------------- | ---------------------------- | ------------------------------------------------------------- |
| `coordinates` | Array\.\<Array\.\<Number\>\> | an array of Positions                                         |
| `properties`  | Object                       | _optional:_ an Object of key-value pairs to add as properties |


### Example

```js
var multiLine = turf.multilinestring([[0,0],[10,10]]);

//=multiLine
```


**Returns** `Feature.<MultiLineString>`, a MultiLineString feature

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-multilinestring
```

## Tests

```sh
$ npm test
```


