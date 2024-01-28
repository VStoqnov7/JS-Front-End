function numberSortAndReverse(n, arr) {
  let newArr = [];

  for (let index = 0; index < n; index++) {
    newArr.push(arr[index]);
  }

  newArr.reverse();

  console.log(newArr.join(" "));
}
