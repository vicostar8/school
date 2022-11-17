import React from "react";

const EditTeacher_Other_Specialization = ({
  subjects,
  teacher,
  editTeacher,
}) => {
  return (
    <div className="col-md-4 mb-3">
      <label htmlFor="forSpec" className="form-label">
        Specialization
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forSpec"
        name="specialization"
        value={teacher.specialization}
        onChange={editTeacher}
      >
        <option value="">Select</option>
        {subjects.map((sub) => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditTeacher_Other_Specialization;
