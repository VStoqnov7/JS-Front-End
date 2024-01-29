function sortingNumbers(arr) {
  arr.sort((a, b) => a - b);

  const result = [];

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (left === right) {
      result.push(arr[left]);
      break;
    }

    result.push(arr[left]);

    result.push(arr[right]);

    left++;
    right--;
  }

  result.forEach((element) => {
    console.log(element);
  });
}
