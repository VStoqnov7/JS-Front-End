function printAndSum(numStart, numEnd) {
  let result = "";
  let sum = 0;

  for (let index = numStart; index <= numEnd; index++) {
    result += index + " ";
    sum += index;
  }

  console.log(result);
  console.log(`Sum: ${sum}`);
}
