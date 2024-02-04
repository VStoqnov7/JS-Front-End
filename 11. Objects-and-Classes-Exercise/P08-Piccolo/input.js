function piccolo(arr) {
  const parking = [];

  for (const input of arr) {
    const inOrOut = input.split(", ")[0];
    const numberCar = input.split(", ")[1];

    if (inOrOut === "IN" && !parking.includes(numberCar)) {
      parking.push(numberCar);
    }

    if (inOrOut === "OUT" && parking.includes(numberCar)) {
      let index = parking.indexOf(numberCar);
      parking.splice(index, 1);
    }
  }

  if (parking.length === 0) {
    console.log(`Parking Lot is Empty`);
  } else {
    parking.sort().forEach((element) => {
      console.log(element);
    });
  }
}

// function piccolo(arr) {
//   const parking = new Set();

//   for (const input of arr) {
//     const [inOrOut, numberCar] = input.split(", ");

//     if (inOrOut === "IN") {
//       parking.add(numberCar);
//     } else if (inOrOut === "OUT" && parking.has(numberCar)) {
//       parking.delete(numberCar);
//     }
//   }

//   if (parking.size === 0) {
//     console.log("Parking Lot is Empty");
//   } else {
//     parking.forEach((car) => {
//       console.log(car);
//     });
//   }
// }
