function printNumber(arr, number) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (index % number === 0) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
  //   newArr.forEach((element) => {
  //     console.log(element);
  //   });
}

printNumber(["5", "20", "31", "4", "20"], 2);
