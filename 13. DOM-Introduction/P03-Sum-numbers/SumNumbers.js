function calc() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sumElement = document.getElementById("sum");

  if (!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    sumElement.value = sum;
  }
}
