function extractOddOccurrences(input) {
  const words = input.toLowerCase().split(" ");

  const wordCount = new Map();

  for (const word of words) {
    if (wordCount.has(word)) {
      wordCount.set(word, wordCount.get(word) + 1);
    } else {
      wordCount.set(word, 1);
    }
  }

  const oddOccurrences = [];
  for (const [word, count] of wordCount) {
    if (count % 2 === 1) {
      oddOccurrences.push(word);
    }
  }

  console.log(oddOccurrences.join(" "));
}

extractOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
