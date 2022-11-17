export function validateStudentsForm(student) {
  let errors = [];

  // ERRORS for FIRST NAME
  if (student.firstName.length < 3 || student.firstName.length > 20)
    errors.push("- First name must have 3-20 charachters long! \n");
  if (typeof student.firstName !== "string")
    errors.push("- First name must be a string! \n");

  // ERRORS for LAST NAME
  if (student.lastName.length < 3 || student.lastName.length > 20)
    errors.push("- Last name must have 3-20 charachters long! \n");
  if (typeof student.lastName !== "string")
    errors.push("- Last name must be a string!\n");

  // ERRORS for CLASS
  if (
    student.memberOfClass.classNumber === 0 ||
    isNaN(student.memberOfClass.classNumber)
  )
    errors.push("- Please choose a valid class!\n");
  if (student.memberOfClass.classLetter === "")
    errors.push("- Please choose a valid letter!\n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
