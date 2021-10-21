// import test from '../src/Hello'

// test('test', () => {
//   expect(true).toBe(true);
// })


import { sum } from '../src/Hello';
test('basic', () => {
  expect(sum(3, 4)).toBe(7);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});