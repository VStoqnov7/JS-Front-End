function deleteByEmail() {
  let textToDelete = document.querySelector("input[type=text]");

  let items = Array.from(document.querySelectorAll("tbody > tr > td"));

  let result = document.querySelector("#result");

  let toRemove = [];

  for (const text of items) {
    if (textToDelete.value === text.textContent) {
      toRemove.push(text);
    }
  }

  if (toRemove.length === 0) {
    result.textContent = "Not found.";
  }

  toRemove.forEach((row) => {
    row.parentElement.remove();
    result.textContent = "Deleted.";
  });
  textToDelete.value = "";
}
