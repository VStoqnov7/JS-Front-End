function censoredWords(input, word) {
  const asterisks = "*".repeat(word.length);

  //   let newText = input.replaceAll(word, asterisks);

  while (input.includes(word)) {
    input = input.replace(word, asterisks);
  }

  console.log(input);
}

censoredWords("A small sentence with some words small", "small");
