function spiceMining(startingYield) {
  let totalSpiceExtracted = 0;
  let days = 0;

  while (startingYield >= 100) {
    totalSpiceExtracted += startingYield;
    totalSpiceExtracted -= 26; 
    startingYield -= 10; 
    days++;
  }

  totalSpiceExtracted -= 26; 

  if (totalSpiceExtracted < 0) {
    totalSpiceExtracted = 0; 
  }

  console.log(days);
  console.log(totalSpiceExtracted);
}
