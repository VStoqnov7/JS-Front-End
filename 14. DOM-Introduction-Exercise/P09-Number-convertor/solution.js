function solve() {
  let numberInput = document.querySelector("#input");
  let toSelect = document.querySelector("#selectMenuTo");
  let resultInput = document.querySelector("#result");

  let firstOption = document.querySelector(
    "#selectMenuTo > option:nth-child(1)"
  );
  firstOption.value = "binary";
  firstOption.text = "Binary";

  let option = document.createElement("option");
  option.value = "hexadecimal";
  option.text = "Hexadecimal";
  toSelect.appendChild(option);

  let convertButton = document.querySelector("button");
  convertButton.addEventListener("click", function () {
    let decimalNumber = Number(numberInput.value);

    if (toSelect.value === "binary") {
      // Convert to binary
      let binaryResult = decimalNumber.toString(2);
      resultInput.value = binaryResult;
    } else if (toSelect.value === "hexadecimal") {
      // Convert to hexadecimal (uppercase)
      let hexResult = decimalNumber.toString(16).toUpperCase();
      resultInput.value = hexResult;
    }
  });
}

solve();

// function decimalToBinary(decimalNumber) {
//   if (decimalNumber === 0) {
//     return "0";
//   }

//   let binary = "";
//   while (decimalNumber > 0) {
//     binary = (decimalNumber % 2) + binary;
//     decimalNumber = Math.floor(decimalNumber / 2);
//   }

//   return binary;
// }

// const decimalNumber = 9;
// const binaryRepresentation = decimalToBinary(decimalNumber);

// console.log(binaryRepresentation); // Output: "1001"

// --------------------------------------------------------------------

// function decimalToHexadecimal(decimalNumber) {
//   if (decimalNumber === 0) {
//     return "0";
//   }

//   let hexadecimal = "";
//   const hexDigits = "0123456789ABCDEF";

//   while (decimalNumber > 0) {
//     const remainder = decimalNumber % 16;
//     hexadecimal = hexDigits[remainder] + hexadecimal;
//     decimalNumber = Math.floor(decimalNumber / 16);
//   }

//   return hexadecimal;
// }

// const decimalNumber = 255;
// const hexadecimalRepresentation = decimalToHexadecimal(decimalNumber);

// console.log(hexadecimalRepresentation); // Output: "FF"
