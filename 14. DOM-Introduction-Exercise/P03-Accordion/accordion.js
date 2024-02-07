function toggle() {
  let button = document.querySelector("#accordion > div.head > span");

  let information = document.querySelector("#extra");

  if (button.textContent === "More") {
    information.style.display = "block";
    button.textContent = "Less";
  } else if (button.textContent === "Less") {
    information.style.display = "none";
    button.textContent = "More";
  }
}
