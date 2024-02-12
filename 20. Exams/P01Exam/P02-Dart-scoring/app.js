window.addEventListener("load", solve);

function solve() {
  let inputs = {
    name: document.querySelector("#player"),
    score: document.querySelector("#score"),
    round: document.querySelector("#round"),
  };

  let btnAdd = document.querySelector("#add-btn");
  let ulList = document.querySelector("#sure-list");

  btnAdd.addEventListener("click", addInScore);

  function addInScore() {
    if (
      inputs.name.value === "" ||
      inputs.score.value === "" ||
      inputs.round.value === ""
    ) {
      return;
    }

    let li = createListItem();
    ulList.appendChild(li);

    clearInputs();
    btnAdd.disabled = true;
  }

  function createListItem() {
    let li = document.createElement("li");
    li.classList.add("dart-item");

    let article = document.createElement("article");
    let index = 1;
    for (let key in inputs) {
      let p = document.createElement("p");

      if (index === 1) {
        p.textContent = inputs[key].value;
      } else if (index === 2) {
        p.textContent = `Score: ${inputs[key].value}`;
      } else if (index === 3) {
        p.textContent = `Round: ${inputs[key].value}`;
      }

      article.appendChild(p);
      index++;
    }

    li.appendChild(article);

    let btnEdit = createButton("edit", edit);
    let btnOk = createButton("ok", ok);

    li.appendChild(btnEdit);
    li.appendChild(btnOk);

    return li;
  }

  function createButton(text, clickHandler) {
    let btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add("btn", text);
    btn.addEventListener("click", clickHandler);
    return btn;
  }

  function clearInputs() {
    for (let key in inputs) {
      inputs[key].value = "";
    }
  }

  function edit() {
    let listItem = this.parentNode;
    let paragraphs = listItem.querySelectorAll("article > p");

    if (paragraphs.length >= 3) {
      inputs.name.value = paragraphs[0].textContent;
      inputs.score.value = paragraphs[1].textContent.match(/\d+/)[0];
      inputs.round.value = paragraphs[2].textContent.match(/\d+/)[0];
    }

    ulList.removeChild(listItem);
    btnAdd.disabled = false;
  }

  function ok() {
    let listItem = this.parentNode;
    let scoreBoard = document.querySelector("#scoreboard-list");
    scoreBoard.appendChild(listItem);

    listItem.removeChild(this); 
    listItem.removeChild(listItem.querySelector(".edit")); 

    btnAdd.disabled = false;
  }

  let clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", function () {
    location.reload();
  });
}
