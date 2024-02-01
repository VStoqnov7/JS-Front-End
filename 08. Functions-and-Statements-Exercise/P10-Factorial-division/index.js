function calculateAndPrintDivision(num1, num2) {
  function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  const factorial1 = calculateFactorial(num1);
  const factorial2 = calculateFactorial(num2);

  const result = factorial1 / factorial2;
  const formattedResult = result.toFixed(2);

  console.log(formattedResult);
}

calculateAndPrintDivision(6, 2);
