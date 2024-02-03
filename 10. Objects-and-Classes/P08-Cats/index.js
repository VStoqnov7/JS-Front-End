function cat(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const input of arr) {
    // const realInput = input.split(" ");
    // const name = realInput[0];
    // const age = realInput[1];

    const name = input.split(" ")[0];
    const age = input.split(" ")[1];

    const cat = new Cat(name, age);
    cat.meow();
  }
}

cat(["Candy 1", "Poppy 3", "Nyx 2"]);
