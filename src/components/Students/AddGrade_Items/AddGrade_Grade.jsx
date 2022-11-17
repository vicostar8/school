import React from "react";
import { generateGrades } from "./../../../utils/generateGrades";

const AddGrade_Grade = ({ gradeChange }) => {
  const grades = generateGrades();

  return (
    <div className="row justify-content-center align-items-center py-2">
      <div className="col-auto">
        <label htmlFor="grade">Grade: </label>
      </div>
      <div className="col-auto">
        <select
          className="form-select"
          aria-label="Default select example"
          id="grade"
          name="grade"
          defaultValue=""
          onChange={gradeChange}
        >
          <option value={0}>Select grade</option>
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AddGrade_Grade;
