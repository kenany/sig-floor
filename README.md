# sig-floor

Round a number down (towards zero) to the nearest multiple of significance.
This is just like the `FLOOR` function in Microsoft Excel.

## Example

``` javascript
import { floor } from 'sig-floor';

// round to the nearest multiple of 2
floor(2.5, 2);
// => 2

// round to the nearest multiple of -2
floor(-2.5, -2);
// => -2

// round to the nearest multiple of 0.1
floor(1.5, 0.1);
// => 1.5

// round to the nearest multiple of 0.01
floor(0.234, 0.01);
// => 0.23
```

## Installation

``` bash
$ npm install sig-floor
```

## API

``` javascript
import { floor } from 'sig-floor';
```

### `floor(number, significance)`

Given the _Number_ `number` that you want to round, returns the floor of
`number` to the _Number_ `significance` multiple.
