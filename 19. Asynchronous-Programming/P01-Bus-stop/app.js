async function getInfo() {
  let id = document.querySelector("#stopId");

  let name = document.querySelector("#stopName");
  let busses = document.querySelector("#buses");

  let url = "http://localhost:3030/jsonstore/bus/businfo/";
  busses.innerHTML = "";

  try {
    let response = await fetch(`${url}${id.value}`);
    let object = await response.json();

    name.textContent = object.name;
    let arrBusses = object.buses;

    for (const key in arrBusses) {
      let li = document.createElement("li");
      li.textContent = `Bus ${key} arrives in ${arrBusses[key]} minutes`;
      busses.appendChild(li);
    }
  } catch (error) {
    name.textContent = "Error";
  }
}
