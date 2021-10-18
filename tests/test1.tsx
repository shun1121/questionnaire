import sum from '../src/Hello'
import React from 'react'

test('adds 1 + 4 to equal 5', () => {
  expect(sum(1, 4)).toBe(<p>{sum(1, 4)}</p>);
});



