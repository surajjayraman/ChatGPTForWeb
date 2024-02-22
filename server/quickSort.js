// quick sort to sort the data
// accept an array of objects and a key to sort by and return the sorted array
const sortedData = function quickSort(arr, key) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][key] < pivot[key]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left, key).concat(pivot, quickSort(right, key));
};

module.exports = { sortedData };
