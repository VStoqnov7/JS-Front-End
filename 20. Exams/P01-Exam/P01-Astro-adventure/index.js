function solve(arr) {
  let n = arr.shift();
  let austronautsArr = [];

  for (let index = 0; index < n; index++) {
    const [name, energy, energyNeeded] = arr[index].split(" ");
    austronautsArr.push({
      name,
      energy: parseInt(energy),
      energyNeeded: parseInt(energyNeeded),
    });
  }

  for (let i = n; i < arr.length; i++) {
    const command = arr[i].split(" - ")[0];
    let name = arr[i].split(" - ")[1];
    let energy = parseInt(arr[i].split(" - ")[2]);

    switch (command) {
      case "Explore":
        let austronaut = austronautsArr.find((obj) => obj.name === name);
        if (austronaut.energyNeeded >= energy) {
          austronaut.energyNeeded -= energy;
          console.log(
            `${austronaut.name} has successfully explored a new area and now has ${austronaut.energyNeeded} energy!`
          );
        } else {
          console.log(`${name} does not have enough energy to explore!`);
        }
        break;
      case "Refuel":
        let refueled = 0;
        let austronautRefuel = austronautsArr.find((obj) => obj.name === name);
        let resultRefuel = austronautRefuel.energyNeeded + energy;
        if (resultRefuel > 200) {
          refueled = 200 - austronautRefuel.energyNeeded;
          austronautRefuel.energyNeeded = 200;
        } else {
          austronautRefuel.energyNeeded += energy;
          refueled = energy;
        }
        console.log(
          `${austronautRefuel.name} refueled their energy by ${refueled}!`
        );
        break;
      case "Breathe":
        let breathe = 0;
        let austronautBreathe = austronautsArr.find((obj) => obj.name === name);
        let resultBreathe = austronautBreathe.energy + energy;
        if (resultBreathe > 100) {
          breathe = 100 - austronautBreathe.energy;
          austronautBreathe.energy = 100;
        } else {
          austronautBreathe.energy += energy;
          breathe = energy;
        }
        console.log(
          `${austronautBreathe.name} took a breath and recovered ${breathe} oxygen!`
        );
        break;
      case "End":
        austronautsArr.forEach((e) =>
          console.log(
            `Astronaut: ${e.name}, Oxygen: ${e.energy}, Energy: ${e.energyNeeded}`
          )
        );
        break;
    }
  }
}

solve([
  "3",
  "John 50 120",
  "Kate 80 180",
  "Rob 70 150",
  "Explore - John - 50",
  "Refuel - Kate - 30",
  "Breathe - Rob - 20",
  "End",
]);
