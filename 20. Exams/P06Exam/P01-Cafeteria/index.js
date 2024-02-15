function solve(arr) {
  let n = parseInt(arr.shift());

  let data = [];

  for (let index = 0; index < n; index++) {
    //{barista name} {shift} {coffee type 1,coffee type 2,...}"
    const [name, shift, cafes] = arr[index].split(" ");
    let object = {
      name,
      shift,
      cafes: cafes.split(","),
    };
    data.push(object);
  }

  for (let index = n; index < arr.length; index++) {
    const [command, ...inputs] = arr[index].split(" / ");

    switch (command) {
      case "Prepare":
        //Prepare / {barista name} / {shift} / {coffee type}
        let [baristaNamePrepare, shiftPrepare, coffeeTypePrepare] = inputs;
        const baristaPrepare = data.find((b) => b.name === baristaNamePrepare);
        if (
          baristaPrepare.shift === shiftPrepare &&
          baristaPrepare.cafes.includes(coffeeTypePrepare)
        ) {
          console.log(
            `${baristaPrepare.name} has prepared a ${coffeeTypePrepare} for you!`
          );
        } else {
          console.log(
            `${baristaPrepare.name} is not available to prepare a ${coffeeTypePrepare}.`
          );
        }
        break;
      case "Change Shift":
        //Change Shift / {barista name} / {new shift}
        let [baristaNameShift, newShift] = inputs;
        const baristaShift = data.find((b) => b.name === baristaNameShift);
        baristaShift.shift = newShift;
        console.log(
          `${baristaShift.name} has updated his shift to: ${newShift}`
        );
        break;
      case "Learn":
        //Learn / {barista name} / {new coffee type}
        let [baristaNameLearn, newCoffeeType] = inputs;
        const baristaLearn = data.find((b) => b.name === baristaNameLearn);
        if (baristaLearn.cafes.includes(newCoffeeType)) {
          console.log(
            `${baristaLearn.name} knows how to make ${newCoffeeType}.`
          );
        } else {
          baristaLearn.cafes.push(newCoffeeType);
          console.log(
            `${baristaLearn.name} has learned a new coffee type: ${newCoffeeType}.`
          );
        }
        break;
    }
  }

  for (const iterator of data) {
    console.log(
      `Barista: ${iterator.name}, Shift: ${
        iterator.shift
      }, Drinks: ${iterator.cafes.join(", ")}`
    );
  }
}

solve([
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
]);
