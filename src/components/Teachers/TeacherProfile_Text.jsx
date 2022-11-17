import React from "react";

const TeacherProfile_Text = ({ teacher }) => {
  return (
    <div className="col-sm col-md-7 d-flex flex-column justify-content-evenly align-items-center">
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        First Name: {teacher.firstName}
      </div>
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        Last Name: {teacher.lastName}
      </div>
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        Gender: {teacher.gender}
      </div>
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        Birth date:{" "}
        {`${teacher.birthDate.day} /${teacher.birthDate.month} /${teacher.birthDate.year}`}
      </div>
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        Specilization: {teacher.specialization}
      </div>
      <div
        className="my-2 fs-3 text-white fw-bold"
        style={{ width: "100%", backgroundColor: "#8599b4" }}
      >
        Class Master:{" "}
        {teacher.isClassMaster.value
          ? `${teacher.isClassMaster.ofClass.number} - ${teacher.isClassMaster.ofClass.char}`
          : "No"}
      </div>
    </div>
  );
};

export default TeacherProfile_Text;
