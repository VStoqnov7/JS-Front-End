function calculateDistance(x1, y1, x2, y2) {
  const distance1 = Math.sqrt(x1 * x1 + y1 * y1);
  const distance2 = Math.sqrt(x2 * x2 + y2 * y2);
  const distance3 = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

  let output = "";

  if (Number.isInteger(distance1)) {
    output += `{${x1}, ${y1}} to {0, 0} is valid\n`;
  } else {
    output += `{${x1}, ${y1}} to {0, 0} is invalid\n`;
  }

  if (Number.isInteger(distance2)) {
    output += `{${x2}, ${y2}} to {0, 0} is valid\n`;
  } else {
    output += `{${x2}, ${y2}} to {0, 0} is invalid\n`;
  }

  if (Number.isInteger(distance3)) {
    output += `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
  } else {
    output += `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
  }

  console.log(`${output}`);
}

calculateDistance(3, 0, 0, 4);
