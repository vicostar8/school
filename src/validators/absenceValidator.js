export function validateAbsenceForm(absence) {
  let errors = [];

  // ERRORS for SUBJECT
  if (absence.subject === "") errors.push("- Choose a subject! \n");

  // ERRORS for LAST NAME
  if (absence.date === "") errors.push("- Date cannot be empty! \n");
  if (absence.date.length < 8 || absence.date.length > 10)
    errors.push("- Date must be between 8-10 characters! \n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
