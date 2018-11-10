'use strict';

module.exports = function insertionSort(array) {
  let savedValue = null;
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[i] < array[x]) {
        savedValue = array[x];
        array[x] = array[i];
        array[i] = savedValue;
      }
    }
  }
  return array;
};
