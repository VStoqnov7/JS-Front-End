function attachEventsListeners() {
  let buttonConvert = document.querySelector("#convert");
  let inputFrom = document.querySelector("#inputDistance");
  let outputTo = document.querySelector("#outputDistance");

  buttonConvert.addEventListener("click", convertDistance);

  function convertDistance() {
    let inputUnits = document.querySelector("#inputUnits");
    let outputUnits = document.querySelector("#outputUnits");

    let selectedInputOption = inputUnits.options[inputUnits.selectedIndex];
    let selectedOutputOption = outputUnits.options[outputUnits.selectedIndex];

    let inputConversionRate = getConversionRate(selectedInputOption.value);
    let outputConversionRate = getConversionRate(selectedOutputOption.value);

    let inputValue = parseFloat(inputFrom.value);
    let inputValueInMeters = inputValue * inputConversionRate;

    let convertedValue = inputValueInMeters / outputConversionRate;

    outputTo.value = convertedValue;
  }

  function getConversionRate(unit) {
    const conversionRates = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254,
    };

    return conversionRates[unit] || 1;
  }
}
