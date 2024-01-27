function toUpperCase(inputString) {
  const words = inputString.match(/\b\w+\b/g);

  if (words) {
    const uppercaseWords = words.map((word) => word.toUpperCase());

    console.log(uppercaseWords.join(", "));
  } else {
    console.log("");
  }
}

toUpperCase("Hi, how are you?");
