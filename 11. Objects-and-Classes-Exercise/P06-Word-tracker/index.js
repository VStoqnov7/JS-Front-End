function wordsTracker(input) {
  const words = input.shift().split(" ");

  const mapWord = new Map();

  for (const word of words) {
    mapWord.set(word, 0);
  }

  for (const search of input) {
    if (mapWord.has(search)) {
      mapWord.set(search, mapWord.get(search) + 1);
    }
  }

  const sortedEntries = [...mapWord.entries()];

  sortedEntries.sort((a, b) => b[1] - a[1]);

  sortedEntries.forEach((entry) => {
    const [word, count] = entry;
    console.log(`${word} - ${count}`);
  });
}

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
