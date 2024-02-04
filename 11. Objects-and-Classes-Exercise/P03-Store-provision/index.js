function store(arr, arr2) {
  const obj = {};

  for (let index = 0; index < arr.length; index += 2) {
    const element = arr[index];
    const value = Number(arr[index + 1]);

    obj[element] = value;
  }

  for (let index = 0; index < arr2.length; index += 2) {
    const element = arr2[index];
    const value = Number(arr2[index + 1]);

    if (obj.hasOwnProperty(element)) {
      obj[element] = obj[element] + value;
    } else {
      obj[element] = value;
    }
  }

  Object.keys(obj).forEach((key) => {
    console.log(`${key} -> ${obj[key]}`);
  });
}
