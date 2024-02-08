function addItem() {
  let input = document.querySelector("#newItemText");

  let ul = document.querySelector("#items");

  let li = document.createElement("li");

  li.textContent = input.value;

  let deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "[Delete]";

  deleteLink.addEventListener("click", function (event) {
    // event.preventDefault();
    ul.removeChild(li);
  });

  li.appendChild(deleteLink);
  ul.appendChild(li);

  input.value = "";
}
