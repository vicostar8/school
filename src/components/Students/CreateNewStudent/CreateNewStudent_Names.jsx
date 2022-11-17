import React from "react";

const CreateNewStudent_Names = ({ student, changeStudentNames }) => {
  return (
    <div className="row">
      <div className="col-sm col-md-6">
        <label htmlFor="forFN" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="forFN"
          name="firstName"
          value={student.firstName}
          onChange={changeStudentNames}
        />
      </div>
      <div className="col-sm col-md-6">
        <label htmlFor="forLN" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="forLN"
          name="lastName"
          value={student.lastName}
          onChange={changeStudentNames}
        />
      </div>
    </div>
  );
};

export default CreateNewStudent_Names;
