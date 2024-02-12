let url = "http://localhost:3030/jsonstore/tasks/";

let btnLoad = document.querySelector("#load-vacations");

let btnAddVacation = document.querySelector("#add-vacation");
let btnEditVacation = document.querySelector("#edit-vacation");

let inputs = {
  name: document.querySelector("#name"),
  numberOfDays: document.querySelector("#num-days"),
  date: document.querySelector("#from-date"),
};

btnLoad.addEventListener("click", load);
let list = document.querySelector("#list");

btnLoad.click();

btnAddVacation.addEventListener("click", add);

async function add(event) {
  event.preventDefault();
  let object = {
    name: inputs.name.value,
    days: inputs.numberOfDays.value,
    date: inputs.date.value,
  };

  try {
    let responce = await fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
    });
    if (responce.ok) {
      console.log("Post work correct!");
    } else {
      console.log("Post don't work correct!");
    }
  } catch (error) {
    console.log("Post don't work correct!");
  }
  for (const key in inputs) {
    inputs[key].value = "";
  }
  btnLoad.click();
}

async function load(event) {
  event.preventDefault();
  for (let i = list.children.length - 1; i >= 0; i--) {
    const child = list.children[i];
    list.removeChild(child);
  }

  let responce = await fetch(url);
  let responceJson = await responce.json();
  let arrResponce = Object.values(responceJson);

  arrResponce.forEach((element) => {
    let div = createElement("div", list, "", ["container"]);
    let h2 = createElement("h2", div, element.name);
    let h3 = createElement("h3", div, element.date);
    let h3Two = createElement("h3", div, element.days);
    let btnChange = createElement("button", div, "Change", ["change-btn"]);
    let btnDone = createElement("button", div, "Done", ["done-btn"]);

    btnDone.addEventListener("click", () => done(element._id));
    btnChange.addEventListener("click", () =>
      change(
        h2.textContent,
        h3.textContent,
        h3Two.textContent,
        div,
        element._id,
        event
      )
    );
  });
}

function change(name, date, days, divToRemove, id, event) {
  list.removeChild(divToRemove);
  inputs.name.value = name;
  inputs.date.value = date;
  inputs.numberOfDays.value = days;
  btnAddVacation.disabled = true;
  btnEditVacation.disabled = false;
  btnEditVacation.addEventListener("click", () => edit(id, event));
}

async function edit(id, event) {
  event.preventDefault();
  let urlToPut = `${url}${id}`;

  let object = {
    name: inputs.name.value,
    days: inputs.numberOfDays.value,
    date: inputs.date.value,
    _id: id,
  };

  try {
    let responce = await fetch(urlToPut, {
      method: "PUT",
      body: JSON.stringify(object),
    });

    if (responce.ok) {
      console.log("Edid work correct");
    } else {
      console.log("Edid don't work correct");
    }
  } catch (error) {
    console.log("Edit don't work correct");
  }
  for (const key in inputs) {
    inputs[key].value = "";
  }

  btnAddVacation.disabled = false;
  btnEditVacation.disabled = true;
  btnLoad.click();
}

async function done(id) {
  let urlToDelete = `${url}${id}`;

  try {
    let responce = await fetch(urlToDelete, {
      method: "DELETE",
    });
    if (responce.ok) {
      console.log("Delete is ok");
    } else {
      console.log("Delete don't work correct");
    }
  } catch (error) {
    console.log("Delete don't work correct");
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
