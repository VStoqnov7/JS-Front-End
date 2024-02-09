function solve() {
  let tr = Array.from(
    document.querySelectorAll("#exercise > table > tbody > tr") //tr tr tr
  );

  let buttonQuick = document.querySelector(
    "#exercise > table > tfoot > tr > td > button:nth-child(1)"
  );

  buttonQuick.addEventListener("click", check);

  function check() {
    let matrix = [];

    for (let index = 0; index < tr.length; index++) {
      const element = tr[index].children; //td td td

      let rows = [];

      for (let index1 = 0; index1 < element.length; index1++) {
        const td = parseInt(element[index1].querySelector("input").value, 10); //1 2 3
        rows.push(td);
      }

      matrix.push(rows);
    }

    const isValid = checkRows(matrix) && checkColumns(matrix);
    let table = document.querySelector("#exercise > table");
    let result = document.querySelector("#check > p");
    if (isValid) {
      result.textContent = "You solve it! Congratulations!";
      table.style.border = "2px solid green";
      result.style.color = "green";
    } else {
      result.textContent = "NOP! You are not done yet...";
      result.style.color = "red";
      table.style.border = "2px solid red";
    }

    function checkRows(matrix) {
      for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const digitSet = new Set();

        for (let j = 0; j < row.length; j++) {
          const digit = row[j];

          if (digitSet.has(digit)) {
            return false; // Repeated digit in the row
          }

          digitSet.add(digit);
        }
      }

      return true; // No repeated digits in rows
    }

    function checkColumns(matrix) {
      for (let j = 0; j < matrix[0].length; j++) {
        const column = matrix.map((row) => row[j]);
        const digitSet = new Set();

        for (let i = 0; i < column.length; i++) {
          const digit = column[i];

          if (digitSet.has(digit)) {
            return false; // Repeated digit in the column
          }

          digitSet.add(digit);
        }
      }

      return true; // No repeated digits in columns
    }
  }

  let buttonClear = document.querySelector(
    "#exercise > table > tfoot > tr > td > button:nth-child(2)"
  );

  buttonClear.addEventListener("click", resets);

  function resets() {
    let inputs = Array.from(document.querySelectorAll("input[type=number]"));

    inputs.forEach((element) => {
      element.value = "";
      let table = document.querySelector("#exercise > table");
      let result = document.querySelector("#check > p");
      result.textContent = "";
      result.style.color = "initial";
      table.style.border = "none";
    });
  }
}
