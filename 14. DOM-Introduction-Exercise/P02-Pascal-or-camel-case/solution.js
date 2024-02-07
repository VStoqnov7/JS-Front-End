function solve() {
  let input = document.querySelector("#text");

  let text = document.querySelector("#naming-convention").value;

  let output = document.querySelector("#result");

  let result = "";

  if (text === "Camel Case") {
    const words = input.value.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    capitalizedWords[0] = capitalizedWords[0].toLowerCase();
    result = capitalizedWords.join("");
  } else if (text === "Pascal Case") {
    const words = input.value.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    result = capitalizedWords.join("");
  } else {
    result = "Error!";
  }

  output.textContent = result;
}
