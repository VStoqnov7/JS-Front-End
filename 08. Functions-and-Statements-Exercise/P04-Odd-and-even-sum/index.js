function oddAndEvenSum(num) {
  let stringNum = num.toString();
  let arr = stringNum.split("").map(Number);

  let sumOdd = 0;
  let sumEven = 0;

  for (const number of arr) {
    if (number % 2 === 0) {
      sumEven += number;
    } else {
      sumOdd += number;
    }
  }

  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
