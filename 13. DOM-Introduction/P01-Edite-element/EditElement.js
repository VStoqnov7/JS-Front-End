function editElement(element, match, replacer) {
  if (element.textContent) {
    element.textContent = element.textContent.replace(
      new RegExp(match, "g"),
      replacer
    );
  } else {
    console.error("The provided element has no text content.");
  }
}

// editElement(
//   document.getElementById("e1"),
//   "%insert name here%",
//   "Document Object Model"
// );
