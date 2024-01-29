function pascalCaseSpliter(text) {
  let result = "";

  for (let index = 0; index < text.length; index++) {
    const letter = text[index];
    if (letter.includes(letter.toUpperCase()) && !(index === 0)) {
      result += ", ";
    }

    result += letter;
  }

  console.log(result);
}

pascalCaseSpliter("SplitMeIfYouCanHaHaYouCantOrYouCan");
