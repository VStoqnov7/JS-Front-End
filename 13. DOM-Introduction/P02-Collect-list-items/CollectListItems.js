function extractText() {
  const li = Array.from(document.querySelectorAll("#items > li"));

  const result = document.querySelector("#result");

  let text = "";

  for (const input of li) {
    text += input.textContent + "\n";
  }

  result.textContent = text;
}
