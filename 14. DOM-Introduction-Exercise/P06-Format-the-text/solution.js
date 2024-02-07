function solve() {
  let inputText = document.querySelector("#input").value;

  let texts = inputText.split(".");
  texts.pop();

  let output = document.querySelector("#output");

  let paragraph;

  for (let index = 0; index < texts.length; index++) {
    const element = texts[index];

    if (index % 3 === 0) {
      paragraph = document.createElement("p");
    }

    paragraph.textContent += element + ".";

    output.appendChild(paragraph);
  }
}
