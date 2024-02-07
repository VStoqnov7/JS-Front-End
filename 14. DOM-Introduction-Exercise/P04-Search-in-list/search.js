function search() {
  let elements = Array.from(document.querySelectorAll("#towns > li"));

  let input = document.querySelector("#searchText").value;

  let result = document.querySelector("#result");

  elements.forEach((element) => {
    element.style.fontWeight = "";
    element.style.textDecoration = "none";
  });

  let matchedElements = elements.filter((element) => {
    return element.textContent.includes(input);
  });

  matchedElements.forEach((element) => {
    element.style.fontWeight = "bold";
    element.style.textDecoration = "underline";
  });

  result.textContent = `${matchedElements.length} matches found`;
}
