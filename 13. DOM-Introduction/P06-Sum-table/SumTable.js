function sumTable() {
  let digits = Array.from(document.querySelectorAll("td:nth-child(even)"));
  let sum = digits.pop();

  sum.textContent = digits.reduce(function (acc, cur) {
    return acc + Number(cur.textContent);
  }, 0);
}
