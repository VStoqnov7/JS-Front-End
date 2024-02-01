function addAndSubtract(num1, num2, num3) {
  function sum(one, two) {
    return one + two;
  }
  function subtract(one, two) {
    return one - two;
  }
  let result1 = sum(num1, num2);
  let result2 = subtract(result1, num3);

  console.log(result2);
}
