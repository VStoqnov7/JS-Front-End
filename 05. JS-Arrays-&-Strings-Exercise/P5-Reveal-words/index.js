function replaceWordsWithTemplates(wordString, templateString) {
  const words = wordString.split(", ");
  const templates = templateString.split(" ");

  let result = templates.map((element) => {
    for (const word of words) {
      if (word.length === element.length && element.startsWith("*")) {
        element = word;
      }
    }
    return element;
  });

  console.log(result.join(" "));
}
