export function validateContactForm(form) {
  let errors = [];

  const { address, phone, email } = form;

  // ERRORS for ADDRESS
  if (address.length < 5 || address.length > 30)
    errors.push("- Address must be between 5-30! \n");
  if (typeof address !== "string")
    errors.push("- Address must be a string! \n");

  // ERRORS for PHONE
  if (phone.length < 5 || phone.length > 15)
    errors.push("- Phone number must be between 5-15! \n");
  if (typeof phone !== "string")
    errors.push("- Phone number must be a string! \n");

  // ERRORS for EMAIL
  if (email.length < 10 || email.length > 30)
    errors.push("- Email must be between 10-30! \n");
  if (typeof email !== "string") errors.push("- Email must be a string! \n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
