function employees(arr) {
  const obj = {};

  for (const person of arr) {
    const namelenght = person.length;
    obj[person] = namelenght;
  }

  Object.keys(obj).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  });
}
