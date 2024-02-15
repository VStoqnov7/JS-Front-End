let btnLoadAll = document.querySelector("#load-button");
let btnAdd = document.querySelector("#add-button");
let inputText = document.querySelector("#title");

btnLoadAll.addEventListener("click", load);

let url = "http://localhost:3030/jsonstore/tasks/";

let ulList = document.querySelector("#todo-list");

btnAdd.addEventListener("click", add);

async function add(e) {
  e.preventDefault();

  let object = {
    name: inputText.value,
  };

  try {
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Post don't work correct!");
  }

  inputText.value = "";
  btnLoadAll.click();
}

async function load(e) {
  e.preventDefault();

  ulList.innerHTML = "";
  let responce = await fetch(url);
  let responceJson = await responce.json();
  let responceArr = Object.values(responceJson);

  responceArr.forEach((element) => {
    let li = createElement("li", ulList);
    let span = createElement("span", li, element.name);
    let buttonRemove = createElement("button", li, "Remove");
    let buttonEdit = createElement("button", li, "Edit");

    buttonRemove.addEventListener("click", () => remove(element._id));
    buttonEdit.addEventListener("click", () => edit(element._id, li));
  });
}

async function edit(id, li) {
  const firstChild = li.firstChild;
  li.removeChild(firstChild);

  let input = document.createElement("input");
  input.value = firstChild.textContent;
  li.insertBefore(input, li.firstChild);

  const lastChild = li.lastChild;
  li.removeChild(lastChild);

  let btnSubmit = createElement("button", li, "Submit");

  btnSubmit.addEventListener("click", () => submit(id, input.value));
}

async function submit(id, text) {
  let object = {
    name: text,
  };

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Patch don't work correct!");
  }
  btnLoadAll.click();
}

async function remove(id) {
  try {
    let responce = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Delete don't work correct!");
  }

  btnLoadAll.click();
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
