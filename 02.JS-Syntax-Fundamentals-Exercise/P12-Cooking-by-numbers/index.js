function cookingByNumbers(number,...input) {
    number = Number(number);

    for (let i = 0; i < input.length ; i++) {
      const operation = input[i];
  
      switch (operation) {
        case "chop":
          number /= 2;
          break;
        case "dice":
          number = Math.sqrt(number);
          break;
        case "spice":
          number += 1;
          break;
        case "bake":
          number *= 3;
          break;
        case "fillet":
          number -= 0.2 * number;
          break;
      }
  
      console.log(number);
    }
}
