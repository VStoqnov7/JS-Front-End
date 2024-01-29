function findWord(word, text) {
  let searchWord = text.toUpperCase().split(" ");

  if (searchWord.includes(word.toUpperCase())) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
