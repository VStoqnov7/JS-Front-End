window.addEventListener("load", solve);

function solve() {
  let inputs = {
    name: document.querySelector("#student"),
    university: document.querySelector("#university"),
    score: document.querySelector("#score"),
  };

  let btnNext = document.querySelector("#next-btn");

  let ulPreviewList = document.querySelector("#preview-list");
  let ulCandidatesList = document.querySelector("#candidates-list");

  btnNext.addEventListener("click", next);

  function next() {
    if (
      inputs.name.value === "" ||
      inputs.university.value === "" ||
      inputs.score.value === ""
    ) {
      return;
    }

    let li = createElement("li", ulPreviewList, "", ["application"]);
    let article = createElement("article", li);
    let h4 = createElement("h4", article, inputs.name.value);
    let p = createElement(
      "p",
      article,
      `University: ${inputs.university.value}`
    );
    let p2 = createElement("p", article, `Score: ${inputs.score.value}`);
    let btnEdit = createElement("button", li, "edit", ["action-btn", "edit"]);
    let btnApply = createElement("button", li, "apply", [
      "action-btn",
      "apply",
    ]);

    btnEdit.addEventListener("click", () =>
      edit(h4.textContent, p.textContent, p2.textContent)
    );

    btnApply.addEventListener("click", () =>
      apply(h4.textContent, p.textContent, p2.textContent)
    );

    for (const key in inputs) {
      inputs[key].value = "";
    }

    btnNext.disabled = true;
  }

  function edit(name, university, score) {
    btnNext.disabled = false;
    inputs.name.value = name;
    inputs.university.value = university.substring(12);
    inputs.score.value = parseInt(score.substring(6));

    for (let i = ulPreviewList.children.length - 1; i >= 0; i--) {
      const child = ulPreviewList.children[i];
      ulPreviewList.removeChild(child);
    }
  }

  function apply(name, university, score) {
    let li = createElement("li", ulCandidatesList, "", ["application"]);
    let article = createElement("article", li);
    let h4 = createElement("h4", article, name);
    let p1 = createElement("p", article, university);
    let p2 = createElement("p", article, score);

    for (let i = ulPreviewList.children.length - 1; i >= 0; i--) {
      const child = ulPreviewList.children[i];
      ulPreviewList.removeChild(child);
    }
    btnNext.disabled = false;
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
}
