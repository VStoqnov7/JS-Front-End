async function solution() {
  try {
    let URL = "http://localhost:3030/jsonstore/advanced/articles/list";

    const urlFetch = await fetch(URL);

    const jsonUrl = await urlFetch.json();
    const urlArray = Object.values(jsonUrl);
    let main = document.querySelector("#main");
    main.innerHTML = "";

    for (const element of urlArray) {
      let divAccordion = document.createElement("div");
      divAccordion.classList.add("accordion");

      let divHead = document.createElement("div");
      divHead.classList.add("head");

      let span = document.createElement("span");
      span.textContent = element.title;
      divHead.appendChild(span);

      let button = document.createElement("button");
      button.classList.add("button");
      button.id = element._id;
      button.textContent = "More";
      button.addEventListener("click", () => showMore(button));
      divHead.appendChild(button);
      divAccordion.appendChild(divHead);

      let divExtra = document.createElement("div");
      divExtra.classList.add("extra");

      const detailsUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`;
      const detailsFetch = await fetch(detailsUrl);

      const detailsJson = await detailsFetch.json();

      let p = document.createElement("p");
      p.textContent = detailsJson.content;
      divExtra.appendChild(p);
      divAccordion.appendChild(divExtra);
      main.appendChild(divAccordion);
    }
  } catch (error) {
    console.error(error);
  }

  function showMore(button) {
    let divExtra = button.parentNode.parentNode.querySelector(".extra");

    if (button.textContent === "More") {
      divExtra.style.display = "block";
      button.textContent = "Less";
    } else if (button.textContent === "Less") {
      divExtra.style.display = "none";
      button.textContent = "More";
    }
  }
}

solution();
