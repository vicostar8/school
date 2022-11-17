import axios from "axios";

export function validateTeachersForm(teacher) {
  let errors = [];

  // ERRORS for FIRST NAME
  if (teacher.firstName.length < 3 || teacher.firstName.length > 20)
    errors.push("- First name must have 3-20 charachters long! \n");
  if (typeof teacher.firstName !== "string")
    errors.push("- First name must be a string! \n");

  // ERRORS for LAST NAME
  if (teacher.lastName.length < 3 || teacher.lastName.length > 20)
    errors.push("- Last name must have 3-20 charachters long! \n");
  if (typeof teacher.lastName !== "string")
    errors.push("- Last name must be a string!\n");

  // ERRORS for GENDER
  if (teacher.gender.length === 0 || teacher.gender === "")
    errors.push("- Please select a gender!\n");

  // ERRORS for DATE OF BIRTH
  const currentYear = new Date();
  if (currentYear.getFullYear() - teacher.birthDate.year < 18)
    errors.push("- Must be over 18 years old at least to become a teacher!\n");

  // ERRORS for Specialization
  if (teacher.specialization.length === 0 || teacher.specialization === "")
    errors.push(
      "- Specialization cannot be empty. Go back to Teachers tab / Create a new Teacher based on a Subject!\n"
    );
  if (typeof teacher.specialization !== "string")
    errors.push("- Specialization must be a string!\n");

  // ERRORS for CLASS
  if (teacher.isClassMaster.value) {
    if (
      teacher.isClassMaster.ofClass.number === 0 ||
      isNaN(teacher.isClassMaster.ofClass.number)
    )
      errors.push("- Please choose a valid class!\n");
    if (teacher.isClassMaster.ofClass.char === "")
      errors.push("- Please choose a valid letter!\n");
  } else if (!teacher.isClassMaster.value) {
    if (teacher.isClassMaster.ofClass.number !== 0)
      errors.push("- Please reset class!\n");
    if (teacher.isClassMaster.ofClass.char !== "")
      errors.push("- Please reset letter!\n");
  }

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
