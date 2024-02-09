function create(words) {
  let content = document.querySelector("#content");

  words.forEach((element) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element;
    p.style.display = "none";
    div.appendChild(p);
    content.appendChild(div);
  });

  let pharagraphs = Array.from(document.querySelectorAll("p"));

  pharagraphs.forEach((element) =>
    element.parentElement.addEventListener("click", function () {
      element.style.display = "block";
    })
  );
}
