var floor = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(floor));
});

test('floors', function(t) {
  t.plan(12);
  t.equal(floor(169.65, 1), 169);
  t.equal(floor(169.65, 0.05), 169.65);
  // t.equal(floor(169.64, 0.05), 169.6);
  t.equal(floor(2.98, 2), 2);
  t.equal(floor(-4.5, -1), -4);
  t.equal(floor(2.5, 1), 2);
  t.equal(floor(-2.5, -2), -2);
  t.equal(floor(1.5, 0.1), 1.5);
  t.equal(floor(0.234, 0.01), 0.23);
  t.equal(floor(10, 3), 9);
  t.equal(floor(36, 7), 35);
  t.equal(floor(660, 100), 600);
});
