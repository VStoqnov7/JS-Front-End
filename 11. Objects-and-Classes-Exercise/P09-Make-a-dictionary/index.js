function createDictionary(input) {
  const dictionary = {};

  for (const jsonString of input) {
    const data = JSON.parse(jsonString);
    const term = Object.keys(data)[0];
    const definition = data[term];

    dictionary[term] = definition;
  }

  const sortedDictionary = Object.keys(dictionary)
    .sort()
    .reduce((result, term) => {
      result[term] = dictionary[term];
      return result;
    }, {});

  for (const term in sortedDictionary) {
    const definition = sortedDictionary[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}
