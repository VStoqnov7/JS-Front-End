function carWash(arr) {
  let cleanliness = 0;

  for (let command of arr) {
    switch (command) {
      case "soap":
        cleanliness += 10;
        break;
      case "water":
        cleanliness *= 1.2;
        break;
      case "vacuum cleaner":
        cleanliness *= 1.25;
        break;
      case "mud":
        cleanliness = cleanliness - cleanliness * 0.1;
        break;
    }
  }

  cleanliness = Math.max(0, Math.min(100, cleanliness));
  console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}
