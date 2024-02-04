function inventory(arr) {
  class Data {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  const massive = [];

  for (const input of arr) {
    const name = input.split(" / ")[0];
    const level = input.split(" / ")[1];
    const items = input.split(" / ")[2].split(", ");

    const data = new Data(name, level, items);
    massive.push(data);
  }

  massive
    .sort(function (a, b) {
      return a.level - b.level;
    })
    .forEach((element) => {
      console.log(`Hero: ${element.name}`);
      console.log(`level => ${element.level}`);
      console.log(`items => ${element.items.join(", ")}`);
    });
}
