function modernTimes(text) {
  let arrText = text.match(/#\w+/g);

  const modifiedArrText = arrText.map((word) => {
    return word.substring(1);
  });

  const filteredArrText = modifiedArrText.filter((element) => {
    return !/\d/.test(element);
  });

  filteredArrText.forEach((element) => {
    console.log(element);
  });
}

modernTimes("Nowadays everyone uses # to tag a #speci2al word in #socialMedia");
