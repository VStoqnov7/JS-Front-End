function searchWordCount(text, word) {
  let count = 0;

  let arrText = text.split(" ");

  for (let index = 0; index < arrText.length; index++) {
    if (arrText[index] === word) {
      count++;
    }
  }

  console.log(count);
}
