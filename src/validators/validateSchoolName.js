export function validateSchoolName(title) {
  let errors = [];

  // ERRORS for FIRST NAME
  if (title.length === 0) errors.push("- Title cannot be empty! \n");
  if (typeof title !== "string") errors.push("- Title must be a string! \n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
