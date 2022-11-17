// import Joi from "joi";

export function validateSubjectForm(text) {
  //   const schema = {
  //     subject: Joi.string().min(5).max(20).required(),
  //   };
  //   const result = schema.subject.validate(info);

  //   if (result.error) console.log(result.error.message);
  //   if (!result.error) console.log(result);

  if (typeof text !== "string") {
    alert("The input is not a TEXT!");
  } else if (text === "") {
    alert("Insert a valid name for a subject!");
  } else if (text.length < 5 || text.length > 20) {
    alert("The subject must have 5-20 characters!");
  } else {
    return true;
  }
  return false;
}
