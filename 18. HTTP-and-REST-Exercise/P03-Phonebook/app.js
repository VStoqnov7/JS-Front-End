function attachEvents() {
  let btnLoad = document.querySelector("#btnLoad");

  btnLoad.addEventListener("click", loadData);

  async function loadData() {
    try {
      let baseURL = "http://localhost:3030/jsonstore/phonebook/";
      let URL = await fetch("http://localhost:3030/jsonstore/phonebook/");
      let dataJson = await URL.json();
      let dataArray = Object.values(dataJson);

      let ul = document.querySelector("#phonebook");
      ul.innerHTML = "";

      dataArray.forEach((element) => {
        let li = document.createElement("li");
        li.textContent = `${element.person}: ${element.phone}`;
        let btn = document.createElement("button");
        btn.textContent = "Delete";
        li.appendChild(btn);
        ul.appendChild(li);

        btn.addEventListener("click", async () => {
          let deleteObject = {
            method: "DELETE",
          };
          let deleteURL = await fetch(`${baseURL}${element._id}`, deleteObject); // Corrected URL

          if (deleteURL.ok) {
            ul.removeChild(li);
          } else {
            console.error("DELETE request failed. Status:", deleteURL.status);
          }
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  let btnCreate = document.querySelector("#btnCreate");

  btnCreate.addEventListener("click", create);

  async function create() {
    let person = document.querySelector("#person");
    let name = person.value;
    let phone = document.querySelector("#phone");
    let phoneNumber = phone.value;
    let baseURL = "http://localhost:3030/jsonstore/phonebook/";

    let object = {
      method: "POST",
      body: JSON.stringify({
        person: name,
        phone: phoneNumber,
      }),
    };

    let URL = await fetch(baseURL, object);
    loadData();
    person.value = "";
    phone.value = "";
  }
}

attachEvents();
