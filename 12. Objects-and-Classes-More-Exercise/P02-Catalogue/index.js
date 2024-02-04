function sortedCatalogue(arr) {
  const data = [];

  for (const input of arr) {
    const productName = input.split(" : ")[0];
    const letter = productName[0];
    const productPrice = parseFloat(input.split(" : ")[1]);

    if (!data[letter]) {
      data[letter] = [];
    }

    data[letter].push({ name: productName, price: productPrice });
  }

  const sortedLetters = Object.keys(data).sort();

  for (const letter of sortedLetters) {
    console.log(letter);
    data[letter]
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((product) => {
        console.log(`  ${product.name}: ${product.price}`);
      });
  }
}

// sortedCatalogue([
//   "Appricot : 20.4",
//   "Fridge : 1500",
//   "TV : 1499",
//   "Deodorant : 10",
//   "Boiler : 300",
//   "Apple : 1.25",
//   "Anti-Bug Spray : 15",
//   "T-Shirt : 10",
// ]);
