window.addEventListener("load", solve);

function solve() {
  let inputs = {
    title: document.querySelector("#task-title"),
    category: document.querySelector("#task-category"),
    content: document.querySelector("#task-content"),
  };

  let btnPublish = document.querySelector("#publish-btn");

  let reviewList = document.querySelector("#review-list");
  let publisherList = document.querySelector("#published-list");

  btnPublish.addEventListener("click", publish);

  function publish() {
    if (
      inputs.title.value === "" ||
      inputs.category.value === "" ||
      inputs.content.value === ""
    ) {
      return;
    }

    let li = createElement("li", reviewList, "", ["rpost"]);
    let article = createElement("article", li);
    let h4 = createElement("h4", article, inputs.title.value);
    let p1 = createElement("p", article, `Category: ${inputs.category.value}`);
    let p2 = createElement("p", article, `Content: ${inputs.content.value}`);
    let btnEdit = createElement("button", li, "Edit", ["action-btn", "edit"]);
    let btnPost = createElement("button", li, "Post", ["action-btn", "post"]);

    btnPost.addEventListener("click", () =>
      post(h4.textContent, p1.textContent, p2.textContent)
    );

    btnEdit.addEventListener("click", () =>
      edit(h4.textContent, p1.textContent, p2.textContent)
    );

    for (const key in inputs) {
      inputs[key].value = "";
    }
  }

  function edit(title, category, content) {
    inputs.title.value = title;
    inputs.category.value = category.substring(10);
    inputs.content.value = content.substring(9);

    removeAllChild(reviewList);
  }

  function post(title, category, content) {
    let li = createElement("li", publisherList, "", ["rpost"]);
    let article = createElement("article", li);
    let h4 = createElement("h4", article, title);
    let p1 = createElement("p", article, category);
    let p2 = createElement("p", article, content);
    removeAllChild(reviewList);
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
