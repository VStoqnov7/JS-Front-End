function solve(arr) {
  let n = arr.shift();

  let data = [];

  for (let index = 0; index < n; index++) {
    //{piece}|{composer}|{key}
    const [piece, composer, key] = arr[index].split("|");
    let object = {
      piece,
      composer,
      key,
    };
    data.push(object);
  }

  for (let index = n; index < arr.length; index++) {
    const [command, ...inputs] = arr[index].split("|");

    switch (command) {
      case "Add":
        //Add|{piece}|{composer}|{key}
        let [piece, composer, key] = inputs;
        const existsAdd = data.findIndex((item) => item.piece === piece);

        if (existsAdd === -1) {
          let object = {
            piece,
            composer,
            key,
          };
          data.push(object);
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        } else {
          console.log(`${piece} is already in the collection!`);
        }
        break;
      case "Remove":
        //Remove|{piece}
        let [pieceRemove] = inputs;
        const existsRemove = data.findIndex(
          (item) => item.piece === pieceRemove
        );
        if (existsRemove !== -1) {
          data.splice(existsRemove, 1);
          console.log(`Successfully removed ${pieceRemove}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceRemove} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        //ChangeKey|{piece}|{new key}
        let [pieceChangeKey, newKey] = inputs;
        const existsChange = data.findIndex(
          (item) => item.piece === pieceChangeKey
        );
        if (existsChange !== -1) {
          const object = data.find((item) => item.piece === pieceChangeKey);
          object.key = newKey;
          console.log(`Changed the key of ${pieceChangeKey} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceChangeKey} does not exist in the collection.`
          );
        }
        break;
    }
  }

  for (const iterator of data) {
    console.log(
      `${iterator.piece} -> Composer: ${iterator.composer}, Key: ${iterator.key}`
    );
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
