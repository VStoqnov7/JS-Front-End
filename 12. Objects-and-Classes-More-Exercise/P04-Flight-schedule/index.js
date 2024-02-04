function airportStatus(input) {
  const [flights, newStatus, statusToCheck] = input;

  const flightStatus = [];

  for (const flight of flights) {
    const [name, destination] = flight.split(" ");
    flightStatus.push({
      name: name,
      Destination: destination,
      Status: "Ready to fly",
    });
  }

  for (const stat of newStatus) {
    const [flight, status] = stat.split(" ");
    flightStatus.forEach((element) => {
      const name = element.name;
      if (name.includes(flight)) {
        element.Status = status;
      }
    });
  }

  if (statusToCheck[0] === "Ready to fly") {
    flightStatus
      .filter((m) => m.Status === "Ready to fly")
      .forEach((element) => {
        console.log(
          `{ Destination: '${element.Destination}', Status: '${element.Status}' }`
        );
      });
  } else {
    flightStatus
      .filter((m) => m.Status !== "Ready to fly")
      .forEach((element) => {
        console.log(
          `{ Destination: '${element.Destination}', Status: '${element.Status}' }`
        );
      });
  }
}

airportStatus([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
