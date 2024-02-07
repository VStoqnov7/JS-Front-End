function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchValue = document
      .querySelector("#searchField")
      .value.toLowerCase()
      .trim();
    let rows = Array.from(document.querySelectorAll(".container tbody tr"));

    rows.forEach((row) => {
      let cells = Array.from(row.querySelectorAll("td"));
      let found = false;

      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(searchValue)) {
          found = true;
        }
      });

      if (found) {
        row.classList.add("select");
      } else {
        row.removeAttribute("class");
      }
    });

    document.querySelector("#searchField").value = "";
  }
}
