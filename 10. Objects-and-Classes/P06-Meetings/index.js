function meeting(arr) {
  const obj = {};

  for (const input of arr) {
    const data = input.split(" ");
    const day = data[0];
    const name = data[1];

    if (obj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      obj[day] = name;
    }
  }

  for (const name in obj) {
    console.log(`${name} -> ${obj[name]}`);
  }
}

meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
