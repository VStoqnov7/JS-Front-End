let btnLoadHistory = document.querySelector("#load-history");

btnLoadHistory.addEventListener("click", load);
let url = "http://localhost:3030/jsonstore/tasks/";
let listToAdd = document.querySelector("#list");

async function load() {
  let response = await fetch(url);
  let data = await response.json();
  let responseArr = Object.values(data);

  listToAdd.innerHTML = "";

  responseArr.forEach((element, index) => {
    let location = element.location;
    let temperature = element.temperature;
    let date = element.date;

    let div = document.createElement("div");
    div.classList.add("container");
    let h2 = document.createElement("h2");
    h2.textContent = location;
    div.appendChild(h2);
    let h3Date = document.createElement("h3");
    h3Date.textContent = date;
    div.appendChild(h3Date);
    let h3Celsius = document.createElement("h3");
    h3Celsius.setAttribute("id", "celsius");
    h3Celsius.textContent = temperature;
    div.appendChild(h3Celsius);

    let div2 = document.createElement("div");
    let btnChange = document.createElement("button");
    btnChange.textContent = "Change";
    btnChange.setAttribute("class", "change-btn");

    div2.appendChild(btnChange);
    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.setAttribute("class", "delete-btn");
    btnDelete.addEventListener("click", () => deleteOfHistory(element._id));
    div2.appendChild(btnDelete);
    div.appendChild(div2);

    listToAdd.appendChild(div);
    btnChange.addEventListener("click", () =>
      change(
        element.location,
        element.temperature,
        element.date,
        element._id,
        index + 1
      )
    );
  });
}

btnLoadHistory.click();

let btnAddWeather = document.querySelector("#add-weather");

btnAddWeather.addEventListener("click", add);

async function add() {
  let location = document.querySelector("#location");
  let temperature = document.querySelector("#temperature");
  let date = document.querySelector("#date");

  let obj = {
    location: location.value,
    temperature: temperature.value,
    date: date.value,
  };

  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    if (response.ok) {
      console.log("Data successfully posted!");
    } else {
      console.error("Failed to post data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  location.value = "";
  temperature.value = "";
  date.value = "";
  btnLoadHistory.click();
}

async function deleteOfHistory(id) {
  let urlToDelete = `${url}${id}`;
  try {
    let response = await fetch(urlToDelete, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Data successfully deleted!");
    } else {
      console.error("Failed to delete data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  btnLoadHistory.click();
}

async function change(location, temperature, date, id, nthChild) {
  let locationInput = document.querySelector("#location");
  let temperatureInput = document.querySelector("#temperature");
  let dateInput = document.querySelector("#date");
  let childToRemove = document.querySelector(
    `#list > div:nth-child(${nthChild})`
  );
  if (childToRemove) {
    listToAdd.removeChild(childToRemove);
  }

  locationInput.value = location;
  temperatureInput.value = temperature;
  dateInput.value = date;
  document.querySelector("#edit-weather").disabled = false;
  document.querySelector("#add-weather").disabled = true;

  let editWeather = document.querySelector("#edit-weather");
  editWeather.addEventListener("click", () => edit(id));
}

async function edit(id) {
  let location = document.querySelector("#location");
  let temperature = document.querySelector("#temperature");
  let date = document.querySelector("#date");

  let obj = {
    location: location.value,
    temperature: temperature.value,
    date: date.value,
  };

  let urlToPut = `${url}${id}`;

  try {
    let response = await fetch(urlToPut, {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    if (response.ok) {
      console.log("Data successfully posted!");
    } else {
      console.error("Failed to post data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  location.value = "";
  temperature.value = "";
  date.value = "";
  document.querySelector("#edit-weather").disabled = true;
  document.querySelector("#add-weather").disabled = false;
  btnLoadHistory.click();
}
