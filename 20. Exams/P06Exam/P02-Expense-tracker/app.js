window.addEventListener("load", solve);

function solve() {
  let inputs = {
    expenseType: document.querySelector("#expense"),
    amount: document.querySelector("#amount"),
    date: document.querySelector("#date"),
  };

  let btnAdd = document.querySelector("#add-btn");
  let btnDelete = document.querySelector("#expenses > button");

  let ulList = document.querySelector("#preview-list");
  let ulExpress = document.querySelector("#expenses-list");

  btnAdd.addEventListener("click", add);
  btnDelete.addEventListener("click", reload);

  function reload() {
    location.reload();
  }

  function add() {
    if (
      inputs.expenseType.value === "" ||
      inputs.amount.value === "" ||
      inputs.date.value === ""
    ) {
      return;
    }

    btnAdd.disabled = true;

    let li = createElement("li", ulList, "", ["expense-item"]);
    let article = createElement("article", li);
    let p1 = createElement("p", article, `Type: ${inputs.expenseType.value}`);
    let p2 = createElement("p", article, `Amount: ${inputs.amount.value}$`);
    let p3 = createElement("p", article, `Date: ${inputs.date.value}`);
    let div = createElement("div", li, "", ["buttons"]);
    let btnEdit = createElement("button", div, "edit", ["btn", "edit"]);
    let btnOk = createElement("button", div, "ok", ["btn", "ok"]);

    for (const key in inputs) {
      inputs[key].value = "";
    }

    btnEdit.addEventListener("click", () =>
      edit(p1.textContent, p2.textContent, p3.textContent)
    );

    btnOk.addEventListener("click", () =>
      ok(p1.textContent, p2.textContent, p3.textContent)
    );
  }

  function ok(type, amount, date) {
    let li = createElement("li", ulExpress, "", ["expense-item"]);
    let article = createElement("article", li);
    let p1 = createElement("p", article, `${type}`);
    let p2 = createElement("p", article, `${amount}$`);
    let p3 = createElement("p", article, `${date}`);
    btnAdd.disabled = false;
    removeAllChild(ulList);
  }

  function edit(type, amount, date) {
    inputs.expenseType.value = type.substring(6);
    inputs.amount.value = amount.match(/\d+/g);
    inputs.date.value = date.substring(6);
    btnAdd.disabled = false;
    removeAllChild(ulList);
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else {
      if (content && type !== "input") {
        htmlElement.textContent = content;
      }

      if (content && type === "input") {
        htmlElement.value = content;
      }
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    // { src: 'link', href: 'http' }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }

  function removeAllChild(element) {
    for (let i = element.children.length - 1; i >= 0; i--) {
      const child = element.children[i];
      element.removeChild(child);
    }
  }
}
