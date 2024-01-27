function calculate(fruit, gram, kilogram) {
  let weight = gram / 1000;
  let money = kilogram * weight;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
