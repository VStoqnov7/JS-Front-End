function listOfName(arr) {
  index = 0;
  arr
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .forEach((element) => {
      console.log(`${++index}.${element}`);
    });

  //   arr.sort();
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(`${i + 1}.${arr[i]}`);
  //   }
}
