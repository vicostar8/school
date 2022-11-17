import React from "react";
import { generateLetter } from "./../../../utils/generateLetter";

const EditStudent_Class_Letter = ({ student, changeStudentCL }) => {
  const classLetters = generateLetter();

  return (
    <div className="col-md col-lg-3">
      <label htmlFor="forClassLetter" className="form-label">
        Class letter
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forClassLetter"
        name="classLetter"
        value={student.memberOfClass.classLetter}
        onChange={changeStudentCL}
      >
        <option value="">Select letter</option>
        {classLetters.map((cL) => (
          <option key={cL} value={cL}>
            {cL}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditStudent_Class_Letter;
