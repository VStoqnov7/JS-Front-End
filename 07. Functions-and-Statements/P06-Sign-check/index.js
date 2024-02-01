function singCheck(numOne, numTwo, numThree) {
  let negatives = 0;

  if (numOne < 0) {
    negatives++;
  }
  if (numTwo < 0) {
    negatives++;
  }
  if (numThree < 0) {
    negatives++;
  }

  if (negatives % 2 === 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }

  //   console.log(numOne * numTwo * numThree);
}

singCheck(-6, -12, 14);
