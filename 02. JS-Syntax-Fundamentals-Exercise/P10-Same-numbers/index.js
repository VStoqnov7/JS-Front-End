function sameNumbersAndSum(numbers) {
  let isValid = true;
  const strNumber = numbers.toString();
  let arr = strNumber.split("").map(Number);
  let sum = arr[0];

  for (let index = 1; index < arr.length; index++) {
    let digit = arr[index];
    sum += digit;
    if (arr[index] !== arr[0]) {
      isValid = false;
    }
  }

  console.log(`${isValid}`);
  console.log(`${sum}`);
}
