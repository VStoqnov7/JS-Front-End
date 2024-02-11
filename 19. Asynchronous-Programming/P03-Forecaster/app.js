function attachEvents() {
  let input = document.querySelector("#location");
  let btn = document.querySelector("#submit");

  let forecasts = document.querySelector("#current > div.forecasts");

  let upcomings = document.querySelectorAll("#upcoming > span:nth-child(2)");

  if (forecasts) {
    forecasts.remove();
  }

  if (upcomings) {
    upcomings.forEach((element) => {
      element.remove();
    });
  }

  let symbols = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
    Degrees: "°",
  };

  btn.addEventListener("click", getWeather);

  async function getWeather() {
    let remove1 = document.querySelector("#current > div.forecasts");
    let remove2 = document.querySelector("#upcoming > div.forecast-info");

    if (remove1) {
      remove1.remove();
    }

    if (remove2) {
      remove2.remove();
    }

    let divForecast = document.querySelector("#forecast");
    divForecast.style.display = "block";
    let current = document.querySelector("#current");
    let upcoming = document.querySelector("#upcoming");

    try {
      let name = input.value.toLowerCase();
      let urlLocations = "http://localhost:3030/jsonstore/forecaster/locations";
      let responseLocations = await fetch(urlLocations);
      let responseLocationsJson = await responseLocations.json();
      let idLocation = responseLocationsJson.find(
        (location) => location.name.trim().toLowerCase() === name.trim()
      );

      let code = idLocation.code;

      let urlForecast = "http://localhost:3030/jsonstore/forecaster/today/";
      let responseToday = await fetch(`${urlForecast}${code}`);
      let responseTodayJson = await responseToday.json();
      let realForecast = responseTodayJson.forecast; //!!!!!!!!!!!!!!!!

      let div = document.createElement("div");
      div.setAttribute("class", "forecasts");
      let span1 = document.createElement("span");
      span1.setAttribute("class", "condition symbol");
      span1.textContent = symbols[realForecast.condition];
      div.appendChild(span1);

      let span2 = document.createElement("span");
      span2.setAttribute("class", "condition");

      let span3 = document.createElement("span");
      span3.setAttribute("class", "forecast-data");
      span3.textContent = responseTodayJson.name;
      span2.appendChild(span3);

      let span4 = document.createElement("span");
      span4.setAttribute("class", "forecast-data");
      span4.textContent = `${realForecast.low}${symbols.Degrees}/${realForecast.high}${symbols.Degrees}`;
      span2.appendChild(span4);

      let span5 = document.createElement("span");
      span5.setAttribute("class", "forecast-data");
      span5.textContent = `${realForecast.condition}`;
      span2.appendChild(span5);

      div.appendChild(span2);
      current.appendChild(div);

      let urlUpcoming = "http://localhost:3030/jsonstore/forecaster/upcoming/";
      let responseUpcoming = await fetch(`${urlUpcoming}${code}`);
      let responseUpcomingJson = await responseUpcoming.json();
      let realUpcoming = responseUpcomingJson.forecast; //!!!!!!!!!!!!

      let divUpcoming = document.createElement("div");
      divUpcoming.setAttribute("class", "forecast-info");

      realUpcoming.forEach((element) => {
        let spanUpcoming1 = document.createElement("span");
        spanUpcoming1.setAttribute("class", "upcoming");

        let spanUpcoming2 = document.createElement("span");
        spanUpcoming2.setAttribute("class", "symbol");
        spanUpcoming2.textContent = symbols[element.condition];
        spanUpcoming1.appendChild(spanUpcoming2);

        let spanUpcoming3 = document.createElement("span");
        spanUpcoming3.setAttribute("class", "forecast-data");
        spanUpcoming3.textContent = `${element.low}${symbols.Degrees}/${element.high}${symbols.Degrees}`;
        spanUpcoming1.appendChild(spanUpcoming3);

        let spanUpcoming4 = document.createElement("span");
        spanUpcoming4.setAttribute("class", "forecast-data");
        spanUpcoming4.textContent = element.condition;

        spanUpcoming1.appendChild(spanUpcoming4);
        divUpcoming.appendChild(spanUpcoming1);
      });

      upcoming.appendChild(divUpcoming);
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
