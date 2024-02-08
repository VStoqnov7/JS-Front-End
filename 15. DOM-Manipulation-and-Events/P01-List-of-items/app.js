function addItem() {
  let input = document.querySelector("#newItemText");

  let ul = document.querySelector("#items");

  let li = document.createElement("li");

  li.textContent = input.value;

  ul.appendChild(li);
  input.value = "";
}
