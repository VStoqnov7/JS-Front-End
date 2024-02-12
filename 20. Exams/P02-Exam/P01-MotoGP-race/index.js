function solve(arr) {
  let n = arr.shift();
  //                100max
  //  {rider}|{fuel capacity}|{position}

  let riders = [];

  for (let index = 0; index < n; index++) {
    const [name, fuelCapacity, position] = arr[index].split("|");

    if (parseInt(fuelCapacity) > 100) {
      fuelCapacity = 100;
    }

    riders.push({
      name,
      fuelCapacity: parseInt(fuelCapacity),
      position: parseInt(position),
    });
  }

  for (let index = n; index < arr.length; index++) {
    let arrToSplit = arr[index].split(" - ");

    const [command, ...arrData] = arrToSplit;

    switch (command) {
      case `StopForFuel`:
        let [name, minimumFuel, newPosition] = arrData;
        let rider = riders.find((obj) => obj.name === name);
        if (rider.fuelCapacity < parseInt(minimumFuel)) {
          rider.position = parseInt(newPosition);
          console.log(
            `${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`
          );
        } else {
          console.log(`${rider.name} does not need to stop for fuel!`);
        }
        break;
      case `Overtaking`:
        const [name1, name2] = arrData;
        let riderNumberOne = riders.find((obj) => obj.name === name1);
        let riderNumberTwo = riders.find((obj) => obj.name === name2);
        let firstPosition = riderNumberOne.position;
        let secondPosition = riderNumberTwo.position;

        if (riderNumberOne.position < riderNumberTwo.position) {
          riderNumberOne.position = secondPosition;
          riderNumberTwo.position = firstPosition;
          console.log(
            `${riderNumberOne.name} overtook ${riderNumberTwo.name}!`
          );
        }

        break;
      case `EngineFail`:
        const [riderFail, lapsLeft] = arrData;
        let failedRiderIndex = riders.findIndex(
          (obj) => obj.name === riderFail
        );

        if (failedRiderIndex !== -1) {
          console.log(
            `${riders[failedRiderIndex].name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
          );
          riders.splice(failedRiderIndex, 1);
        }

        break;
      case `Finish`:
        // riders.sort((a, b) => a.position - b.position);
        riders.forEach((rider) => {
          console.log(`${rider.name}`);
          console.log(`  Final position: ${rider.position}`);
        });

        break;
    }
  }
}

solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
