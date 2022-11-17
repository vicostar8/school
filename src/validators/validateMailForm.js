export function validateMailForm(form) {
  let errors = [];

  const { name, email, subject, message } = form;

  // ERRORS for NAME
  if (name.length < 5 || name.length > 30)
    errors.push("- Full name must be between 5-30! \n");
  if (typeof name !== "string") errors.push("- Full name must be a string! \n");

  // ERRORS for EMAIL
  if (email.length < 5 || email.length > 30)
    errors.push("- Email must be between 5-30! \n");
  if (typeof email !== "string") errors.push("- Email must be a string! \n");

  // ERRORS for SUBJECT
  if (subject.length < 5 || subject.length > 30)
    errors.push("- Subject must be between 5-30! \n");
  if (typeof subject !== "string")
    errors.push("- Subject must be a string! \n");

  // ERRORS for MESSAGE
  if (message.length === 0) errors.push("- Message cannot be empty! \n");
  if (typeof message !== "string")
    errors.push("- Message must be a string! \n");

  if (errors.length > 0) {
    alert(`Solve these errors before: \n\n ${errors.join("")}`);
    return false;
  } else if (errors.length === 0) return true;
}
