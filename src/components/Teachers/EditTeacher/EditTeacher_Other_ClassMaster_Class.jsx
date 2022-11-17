import React from "react";

import { generateClasses } from "../../../utils/generateClasses";

const EditTeacher_Other_ClassMaster_Class = ({
  teacher,
  editTeacherCM_Class,
}) => {
  const classes = generateClasses();

  let dV = "";
  if (teacher.isClassMaster.value) dV = teacher.isClassMaster.ofClass.number;
  if (!teacher.isClassMaster.value) dV = 0;

  return (
    <div className="col">
      <label htmlFor="forClass" className="form-label">
        Class
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forClass"
        name="number"
        value={teacher.isClassMaster.ofClass.number}
        onChange={editTeacherCM_Class}
        disabled={!teacher.isClassMaster.value}
      >
        <option value={0}>Select</option>
        {classes.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditTeacher_Other_ClassMaster_Class;
