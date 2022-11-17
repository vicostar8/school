import React from "react";

const EditTeacher_Other_ClassMaster_Is = ({ teacher, editTeacherCM }) => {
  const value = teacher.isClassMaster.value ? "yes" : "no";

  return (
    <div className="col">
      <label htmlFor="forCM" className="form-label">
        Class Master
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forCM"
        name="value"
        value={value}
        onChange={editTeacherCM}
      >
        <option value="">Select</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
  );
};

export default EditTeacher_Other_ClassMaster_Is;
