let url = "http://localhost:3030/jsonstore/tasks/";

let btnLoad = document.querySelector("#load-meals");
let btnAddMeal = document.querySelector("#add-meal");
let btnEditMeal = document.querySelector("#edit-meal");

let divList = document.querySelector("#list");

let inputs = {
  food: document.querySelector("#food"),
  time: document.querySelector("#time"),
  calories: document.querySelector("#calories"),
};

btnLoad.addEventListener("click", load);
btnAddMeal.addEventListener("click", add);

btnLoad.click();
async function load() {
  divList.innerHTML = "";

  let responce = await fetch(url);
  let responceJson = await responce.json();
  let responceArr = Object.values(responceJson);

  responceArr.forEach((element) => {
    let div = createElement("div", divList, "", ["meal"]);
    let h2 = createElement("h2", div, `${element.food}`);
    let h3 = createElement("h3", div, `${element.time}`);
    let h31 = createElement("h3", div, `${element.calories}`);
    let divButtons = createElement("div", div, "", "", "meal-buttons");
    let buttonChange = createElement("button", divButtons, "Change", [
      "change-meal",
    ]);
    let buttonDelete = createElement("button", divButtons, "Delete", [
      "delete-meal",
    ]);

    buttonChange.addEventListener("click", () =>
      edit(h2.textContent, h3.textContent, h31.textContent, div, element._id)
    );

    buttonDelete.addEventListener("click", () => dell(div, element._id));
  });
}

async function dell(div, id) {
  try {
    let responce = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("DELETE don't work correct!");
  }

  div.remove();
  btnLoad.click();
}

async function add() {
  if (
    inputs.food.value === "" ||
    inputs.time.value === "" ||
    inputs.calories.value === ""
  ) {
    return;
  }

  let object = {
    food: inputs.food.value,
    calories: inputs.calories.value,
    time: inputs.time.value,
  };

  try {
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Post don't work correct!");
  }

  for (const key in inputs) {
    inputs[key].value = "";
  }

  btnLoad.click();
}

async function edit(food, time, calories, div, id) {
  btnEditMeal.disabled = false;
  btnAddMeal.disabled = true;
  inputs.food.value = food;
  inputs.time.value = time;
  inputs.calories.value = calories;

  div.remove();

  btnEditMeal.addEventListener("click", () => editMeal(id));
}

async function editMeal(id) {
  let object = {
    food: inputs.food.value,
    calories: inputs.calories.value,
    time: inputs.time.value,
    _id: id,
  };

  try {
    let responce = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
    if (!responce.ok) {
      console.log("PUT request failed!");
    }
  } catch (error) {
    console.log("PUT dont work correct!");
  }

  btnEditMeal.disabled = true;
  btnAddMeal.disabled = false;

  for (const key in inputs) {
    inputs[key].value = "";
  }

  btnLoad.click();
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
