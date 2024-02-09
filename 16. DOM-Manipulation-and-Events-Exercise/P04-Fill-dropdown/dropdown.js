function addItem() {
  let text = document.querySelector("#newItemText");
  let value = document.querySelector("#newItemValue");

  let menu = document.querySelector("#menu");

  let option = document.createElement("option");
  option.textContent = text.value;
  option.value = value.value;

  menu.appendChild(option);

  text.value = "";
  value.value = "";
}
