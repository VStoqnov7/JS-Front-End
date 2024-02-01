function numberModification(num) {
  let number = num;

  while (true) {
    const digits = Array.from(number.toString()).map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const average = sum / digits.length;

    if (average > 5) {
      break;
    }

    number = number * 10 + 9;
  }

  console.log(number);
}

numberModification(101);
