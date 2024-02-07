function subtract() {
  let firstNumberInput = document.querySelector("#firstNumber");
  let secondNumberInput = document.querySelector("#secondNumber");
  let result = document.querySelector("#result");
  firstNumberInput.disabled = false;
  secondNumberInput.disabled = false;

  //   firstNumberInput.addEventListener("input", updateResult);
  //   secondNumberInput.addEventListener("input", updateResult);

  //   function updateResult() {
  //     let total =
  //       Number(firstNumberInput.value) - Number(secondNumberInput.value);

  //     result.textContent = total;
  //   }

  let total = Number(firstNumberInput.value) - Number(secondNumberInput.value);

  result.textContent = total;
}
