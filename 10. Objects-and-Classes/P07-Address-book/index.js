function addresBook(arr) {
  const obj = {};

  for (const input of arr) {
    const inputSplit = input.split(":");
    const name = inputSplit[0];
    const city = inputSplit[1];

    obj[name] = city;
  }

  Object.keys(obj)
    .sort()
    .forEach((input) => {
      console.log(`${input} -> ${obj[input]}`);
    });

  //   for (const input in obj) {
  //     console.log(`${input} -> ${obj[input]}`);
  //   }
}

addresBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
