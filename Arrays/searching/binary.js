export const arrayForSearch = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

let count = 0;

export function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    count++;
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      console.log(middle);
      console.log(count);
      return middle;
    }
    if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
