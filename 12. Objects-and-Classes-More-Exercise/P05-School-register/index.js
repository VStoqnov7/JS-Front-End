function arrangeStudentsByGrade(students) {
  const grades = new Map();

  students.forEach((studentData) => {
    const [, name, gradeStr, scoreStr] = studentData.match(
      /Student name: (.*), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/
    );

    const grade = parseInt(gradeStr, 10);
    const score = parseFloat(scoreStr);

    if (score >= 3) {
      if (!grades.has(grade)) {
        grades.set(grade, { students: [], totalScore: 0, count: 0 });
      }

      const gradeInfo = grades.get(grade);
      gradeInfo.students.push(name);
      gradeInfo.totalScore += score;
      gradeInfo.count++;
    }
  });

  const sortedGrades = [...grades.keys()].sort((a, b) => a - b);

  sortedGrades.forEach((grade) => {
    const gradeInfo = grades.get(grade);
    const averageScore = (gradeInfo.totalScore / gradeInfo.count).toFixed(2);

    console.log(`${++grade} Grade`);
    console.log(`List of students: ${gradeInfo.students.join(", ")}`);
    console.log(`Average annual score from last year: ${averageScore}`);
    console.log("");
  });
}

arrangeStudentsByGrade([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
