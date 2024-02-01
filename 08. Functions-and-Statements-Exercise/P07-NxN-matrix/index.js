function printMatrixWithNumber(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(n);
    }
    matrix.push(row);
  }

  console.log(matrix.map((row) => row.join(" ")).join("\n"));
}

printMatrixWithNumber(3);
