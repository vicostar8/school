import React from "react";

const EditTeacher_Names_Common = ({ label, teacher, editTeacher }) => {
  const string = label[0].toUpperCase() + label.substring(1);

  const keysOfTeacher = Object.keys(teacher);
  const filter = keysOfTeacher.filter((key) => key === label + "Name");

  return (
    <div className="col-sm-5">
      <label htmlFor={`for${label}Name`} className="form-label">
        {string} name
      </label>
      <input
        type="text"
        className="form-control"
        id={`for${label}Name`}
        name={filter[0]}
        value={teacher[filter[0]]}
        onChange={editTeacher}
      />
    </div>
  );
};

export default EditTeacher_Names_Common;
