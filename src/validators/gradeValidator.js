export function validateGradeForm(grade) {
  let errors = [];

  // ERRORS for SUBJECT
  if (grade.subject === "") errors.push("- Choose a subject! \n");

  // ERROR for GRADE
  if (grade.grade === 0) errors.push("- Choose a grade! \n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
