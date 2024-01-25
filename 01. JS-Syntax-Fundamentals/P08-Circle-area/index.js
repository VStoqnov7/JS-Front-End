function calculateCircleArea(input) {
    if (typeof input === 'number') {
      const radius = input;
      const area = Math.PI * Math.pow(radius, 2);
      console.log(`${area.toFixed(2)}`);
    } else {
      console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
  }