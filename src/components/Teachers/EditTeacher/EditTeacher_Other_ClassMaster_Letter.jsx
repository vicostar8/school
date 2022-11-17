import React from "react";

import { generateLetter } from "../../../utils/generateLetter";

const EditTeacher_Other_ClassMaster_Letter = ({
  teacher,
  editTeacherCM_Letter,
}) => {
  const letters = generateLetter();

  return (
    <div className="col">
      <label htmlFor="forLetter" className="form-label">
        Letter
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forLetter"
        name="char"
        value={teacher.isClassMaster.ofClass.char}
        onChange={editTeacherCM_Letter}
        disabled={!teacher.isClassMaster.value}
      >
        <option value="">Select</option>
        {letters.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditTeacher_Other_ClassMaster_Letter;
