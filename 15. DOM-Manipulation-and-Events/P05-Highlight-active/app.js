function focused() {
  const divs = Array.from(document.querySelectorAll("div"));

  for (const div of divs) {
    const input = div.querySelector("input");

    input.addEventListener("focus", () => {
      // Remove the "focused" class from all divs
      divs.forEach((otherDiv) => otherDiv.classList.remove("focused"));

      // Add the "focused" class to the div containing the focused input
      div.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      // Remove the "focused" class from the div when the input loses focus
      div.classList.remove("focused");
    });
  }
}
