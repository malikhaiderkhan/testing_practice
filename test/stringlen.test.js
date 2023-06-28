const stringlen = require('../src/stringlen');

describe('stringlen', () => {
test('string length of "horse" is 5', () => {
  expect(stringlen('horse')).toBe(5);
});

test('string length of "haider" is 6', () => {
  expect(stringlen('haider')).toBe(6);
});

test('Null string throws an error', () => {
  expect(() => {stringlen('');}).toThrow();
});

test('string with more than 10 characters throws an error', () => {
  expect(() => {stringlen('missgjahignisdniinoso');}).toThrow();
});
});