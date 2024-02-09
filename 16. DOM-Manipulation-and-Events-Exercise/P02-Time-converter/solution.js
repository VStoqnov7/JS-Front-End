function attachEventsListeners() {
  let days = document.querySelector("#days");
  let daysButton = document.querySelector("#daysBtn");

  let hours = document.querySelector("#hours");
  let hoursButton = document.querySelector("#hoursBtn");

  let minutes = document.querySelector("#minutes");
  let minutesButton = document.querySelector("#minutesBtn");

  let seconds = document.querySelector("#seconds");
  let secondsButton = document.querySelector("#secondsBtn");

  daysButton.addEventListener("click", functionDays);
  hoursButton.addEventListener("click", functionHours);
  minutesButton.addEventListener("click", functionMinutes);
  secondsButton.addEventListener("click", functionSeconds);

  function functionDays() {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }

  function functionHours() {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }

  function functionMinutes() {
    debugger;
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
    seconds.value = minutes.value * 60;
  }

  function functionSeconds() {
    minutes.value = seconds.value / 60;
    hours.value = minutes.value / 60;
    days.value = hours.value / 24;
  }
}
