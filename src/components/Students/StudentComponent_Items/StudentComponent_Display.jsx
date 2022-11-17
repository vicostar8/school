import React from "react";

const StudentComponent_Display = ({ student }) => {
  return (
    <div className="col-md col-lg-8 p-1 d-flex justify-content-center justify-content-md-start align-items-center">
      <span
        className="badge text-white fw-bold mx-2 fs-5"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        {student.lastName}
      </span>
      <span
        className="badge text-white fw-bold mx-2 fs-5"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        {student.firstName}
      </span>
      <span
        className="badge text-white fw-bold mx-2 fs-5"
        style={{ backgroundColor: "#1a2d4b" }}
      >{` Class: ${student.memberOfClass.classNumber} - ${student.memberOfClass.classLetter}`}</span>
    </div>
  );
};

export default StudentComponent_Display;
