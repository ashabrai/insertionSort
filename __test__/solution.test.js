'use strict';

const insertionSort = require('../src/solution');

const testArray = [6, 8, 1, 5, 20, 75];

describe('#solution.js', () => {
  test('Test to see if it sorts array', () => {
    const correctArray = insertionSort(testArray);
    expect(correctArray).toEqual([1, 5, 6, 8, 20, 75]);
  });
});
