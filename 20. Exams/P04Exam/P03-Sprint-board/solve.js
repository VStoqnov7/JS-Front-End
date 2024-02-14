let btnLoad = document.querySelector("#load-board-btn");
let btnAddTask = document.querySelector("#create-task-btn");
let url = "http://localhost:3030/jsonstore/tasks/";

let sections = {
  todo: document.querySelector("#todo-section > ul"),
  inProgress: document.querySelector("#in-progress-section > ul"),
  codeReview: document.querySelector("#code-review-section > ul"),
  done: document.querySelector("#done-section > ul"),
};

let inputs = {
  taskTitle: document.querySelector("#title"),
  taskDescription: document.querySelector("#description"),
};

btnLoad.addEventListener("click", load);
btnLoad.click();

btnAddTask.addEventListener("click", add);

async function add() {
  let object = {
    title: inputs.taskTitle.value,
    description: inputs.taskDescription.value,
    status: "ToDo",
  };

  try {
    let responce = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("POST don't work correct");
  }

  for (const key in inputs) {
    inputs[key].value = "";
  }
  btnLoad.click();
}

async function load() {
  let responce = await fetch(url);
  let responceJson = await responce.json();
  let responceArr = Object.values(responceJson);

  for (const key in sections) {
    sections[key].innerHTML = "";
  }

  responceArr.forEach((element) => {
    switch (element.status) {
      case "ToDo":
        let liTodo = createElement("li", sections.todo, "", ["task"]);
        let h3Todo = createElement("h3", liTodo, element.title);
        let pTodo = createElement("p", liTodo, element.description);
        let buttonTodo = createElement("button", liTodo, "Move to In Progress");
        buttonTodo.addEventListener("click", () => todoBtn(element._id));
        break;
      case "In Progress":
        let liInProgress = createElement("li", sections.inProgress, "", [
          "task",
        ]);
        let h3InProgress = createElement("h3", liInProgress, element.title);
        let pInProgress = createElement("p", liInProgress, element.description);
        let buttonInProgress = createElement(
          "button",
          liInProgress,
          "Move to Code Review"
        );
        buttonInProgress.addEventListener("click", () =>
          inProgresesBtn(element._id)
        );
        break;
      case "Code Review":
        let liCodeReview = createElement("li", sections.codeReview, "", [
          "task",
        ]);
        let h3CodeReview = createElement("h3", liCodeReview, element.title);
        let pCodeReview = createElement("p", liCodeReview, element.description);
        let buttonCodeReview = createElement(
          "button",
          liCodeReview,
          "Move to Done"
        );
        buttonCodeReview.addEventListener("click", () =>
          codeReviewBtn(element._id)
        );
        break;
      case "Done":
        let liDone = createElement("li", sections.done, "", ["task"]);
        let h3Done = createElement("h3", liDone, element.title);
        let pDone = createElement("p", liDone, element.description);
        let buttonDone = createElement("button", liDone, "Close");
        buttonDone.addEventListener("click", () => doneBtn(element._id));
        break;
    }
  });
}

async function doneBtn(id) {
  try {
    let responce = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("DELETE don't work correct");
  }
  btnLoad.click();
}

async function codeReviewBtn(id) {
  let object = {
    status: "Done",
  };

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Patch don't work correct");
  }
  btnLoad.click();
}

async function inProgresesBtn(id) {
  let object = {
    status: "Code Review",
  };

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Patch don't work correct");
  }
  btnLoad.click();
}

async function todoBtn(id) {
  let object = {
    status: "In Progress",
  };

  try {
    let responce = await fetch(`${url}${id}`, {
      method: "PATCH",
      body: JSON.stringify(object),
    });
  } catch (error) {
    console.log("Patch don't work correct");
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
