function sort1(arr) {
  for (let i = 0, len = arr.length - 1; i < len; --len) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function sort2(arr) {
  if (arr <= 1) return arr;
  let left = [];
  let right = [];
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[0] >= arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort2(left).concat(arr[0], sort2(right));
}
let arr = [13, 65, 7, 82, 4, 67, 3, 6, 344, 66, 112];

console.log(sort2(arr));
