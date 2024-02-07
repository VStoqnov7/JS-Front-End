function generateReport() {
  let checkboxes = Array.from(
    document.querySelectorAll("input[type=checkbox]")
  );

  let names = Array.from(document.querySelectorAll("thead > tr > th")).map(
    (th) => th.textContent.toLowerCase().trim()
  );

  let checkedCheckBoxes = [];

  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    if (checkbox.checked) {
      checkedCheckBoxes.push({ name: names[i], index: i });
    }
  }
  let objectChecked = [];

  let rows = Array.from(document.querySelectorAll("tbody > tr"));

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let rowData = {};

    checkedCheckBoxes.forEach((element) => {
      let columnIndex = element.index;
      rowData[element.name] = rows[rowIndex].querySelector(
        `td:nth-child(${columnIndex + 1})`
      ).textContent;
    });

    objectChecked.push(rowData);
  }

  let outout = document.querySelector("#output");
  outout.value = JSON.stringify(objectChecked, null, 3);
}
