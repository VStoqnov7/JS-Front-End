window.addEventListener("load", solve);

function solve() {
  let inputs = {
    firstname: document.querySelector("#first-name"),
    lastname: document.querySelector("#last-name"),
    age: document.querySelector("#age"),
    storyTitle: document.querySelector("#story-title"),
    genre: document.querySelector("#genre"),
    story: document.querySelector("#story"),
  };

  let btnPublish = document.querySelector("#form-btn");

  let ulList = document.querySelector("#preview-list");

  btnPublish.addEventListener("click", publish);

  function publish() {
    if (
      inputs.firstname.value === "" ||
      inputs.lastname.value === "" ||
      inputs.age.value === "" ||
      inputs.storyTitle.value === "" ||
      inputs.genre.value === "" ||
      inputs.story.value === ""
    ) {
      return;
    }

    let li = createElement("li", ulList, "", ["story-info"]);
    let article = createElement("article", li);
    let h4 = createElement(
      "h4",
      article,
      `Name: ${inputs.firstname.value} ${inputs.lastname.value}`
    );
    let p = createElement("p", article, `Age: ${inputs.age.value}`);
    let p2 = createElement("p", article, `Title: ${inputs.storyTitle.value}`);
    let p3 = createElement("p", article, `Genre: ${inputs.genre.value}`);
    let p4 = createElement("p", article, inputs.story.value);
    let btnSave = createElement("button", li, "Save Story", ["save-btn"]);
    let btnEdit = createElement("button", li, "Edit Story", ["edit-btn"]);
    let btnDelete = createElement("button", li, "Delete Story", ["delete-btn"]);
    for (const key in inputs) {
      inputs[key].value = "";
    }

    btnPublish.disabled = true;

    btnEdit.addEventListener("click", () =>
      edit(
        h4.textContent,
        p.textContent,
        p2.textContent,
        p3.textContent,
        p4.textContent
      )
    );

    btnSave.addEventListener("click", () => save());
    btnDelete.addEventListener("click", () => dell());
  }

  function dell() {
    let toRemove = document.querySelector("#preview-list > li");
    toRemove.remove();
    btnPublish.disabled = false;
  }

  function save() {
    let main = document.querySelector("#main");
    removeAllChild(main);

    let h1 = createElement("h1", main, "Your scary story is saved!");
  }

  function edit(firstAndLastName, age, storyTitle, genre, story) {
    inputs.firstname.value = firstAndLastName.split(" ")[1];
    inputs.lastname.value = firstAndLastName.split(" ")[2];
    inputs.age.value = age.substring(5);
    inputs.storyTitle.value = storyTitle.substring(7);
    inputs.genre.value = genre.substring(7);
    inputs.story.value = story;

    let toRemove = document.querySelector("#preview-list > li");
    toRemove.remove();
    btnPublish.disabled = false;
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
