let url = "http://localhost:3030/jsonstore/tasks/";

let btnLoad = document.querySelector("#load-course");

btnLoad.addEventListener("click", load);

let btnAdd = document.querySelector("#add-course");
let btnEdit = document.querySelector("#edit-course");

let loadList = document.querySelector("#list");

let inputs = {
  title: document.querySelector("#course-name"),
  type: document.querySelector("#course-type"),
  course: document.querySelector("#description"),
  name: document.querySelector("#teacher-name"),
};
btnLoad.click();

btnAdd.addEventListener("click", add);

async function add(event) {
  event.preventDefault();
  if (
    inputs.title.value === "" ||
    inputs.type.value === "" ||
    inputs.course.value === "" ||
    inputs.name.value === ""
  ) {
    return;
  }

  let object = {
    title: inputs.title.value,
    type: inputs.type.value,
    description: inputs.course.value,
    teacher: inputs.name.value,
  };

  let responce = await fetch(url, {
    method: "POST",
    body: JSON.stringify(object),
  });
  for (const key in inputs) {
    inputs[key].value = "";
  }
  btnLoad.click();
}

async function load(event) {
  removeAllChild(loadList);

  try {
    let responce = await fetch(url);
    let responseJson = await responce.json();
    let responceArr = Object.values(responseJson);

    responceArr.forEach((element, index) => {
      let div = createElement("div", loadList, "", ["container"]);
      let h2 = createElement("h2", div, element.title);
      let h3 = createElement("h3", div, element.teacher);
      let h31 = createElement("h3", div, element.type);
      let h4 = createElement("h4", div, element.description);
      let btnEditCourse = createElement("button", div, "Edit Course", [
        "edit-btn",
      ]);
      let btnFinishCourse = createElement("button", div, "Finish Course", [
        "finish-btn",
      ]);

      btnFinishCourse.addEventListener("click", () => del(element._id, event));

      btnEditCourse.addEventListener("click", () =>
        edit(
          h2.textContent,
          h3.textContent,
          h31.textContent,
          h4.textContent,
          index + 1,
          element._id,
          event
        )
      );
    });
  } catch (error) {
    console.log("Get dont work correct!");
  }
}

async function del(id, event) {
  event.preventDefault();

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Delete is not work correct!");
  }
  btnLoad.click();
}

function edit(title, name, type, course, nthChild, id, event) {
  event.preventDefault();
  inputs.title.value = title;
  inputs.type.value = type;
  inputs.course.value = course;
  inputs.name.value = name;

  let div = document.querySelector(`#list > div:nth-child(${nthChild})`);

  loadList.removeChild(div);
  btnAdd.disabled = true;
  btnEdit.disabled = false;

  btnEdit.addEventListener("click", () => editCourse(id, event));
}

async function editCourse(id, event) {
  event.preventDefault();

  let object = {
    title: inputs.title.value,
    type: inputs.type.value,
    description: inputs.course.value,
    teacher: inputs.name.value,
    _id: id,
  };

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "PUT",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Put don't work correct!");
  }
  for (const key in inputs) {
    inputs[key].value = "";
  }
  btnAdd.disabled = false;
  btnEdit.disabled = true;
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
