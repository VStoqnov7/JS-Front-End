function formatGrade(grade) {
  let output = "";

  if (grade < 3.0) {
    output = `Fail (${Math.floor(grade)})`;
  } else if (grade < 3.5) {
    output = `Poor (${grade.toFixed(2)})`;
  } else if (grade < 4.5) {
    output = `Good (${grade.toFixed(2)})`;
  } else if (grade < 5.5) {
    output = `Very good (${grade.toFixed(2)})`;
  } else {
    output = `Excellent (${grade.toFixed(2)})`;
  }

  console.log(output);
}
