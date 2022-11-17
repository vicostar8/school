import React from "react";
import { generateClasses } from "./../../../utils/generateClasses";

const CreateNewStudent_Class_Number = ({ student, changeStudentCN }) => {
  const classNumbers = generateClasses();

  return (
    <div className="col-md col-lg-3">
      <label htmlFor="forClassNumber" className="form-label">
        Class number
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forClassNumber"
        name="classNumber"
        value={student.memberOfClass.classNumber}
        onChange={changeStudentCN}
      >
        <option value={0}>Select number</option>
        {classNumbers.map((cN) => (
          <option key={cN} value={cN}>
            {cN}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CreateNewStudent_Class_Number;
