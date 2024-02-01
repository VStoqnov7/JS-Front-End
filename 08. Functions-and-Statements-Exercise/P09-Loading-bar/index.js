function loadingBar(percentage) {
  //   if (percentage < 0 || percentage > 100) {
  //     console.log("Invalid input. Percentage should be between 0 and 100.");
  //     return;
  //   }

  if (percentage === 100) {
    console.log(`100% Complete!`);
    return;
  }

  const barLength = 10;
  const completed = Math.floor(percentage / 10);
  const remaining = barLength - completed;

  const loadingBar = "[" + "%".repeat(completed) + ".".repeat(remaining) + "]";

  console.log(`${percentage}% ${loadingBar}`);
  console.log("Still loading...");
}

loadingBar(100);
