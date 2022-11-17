import React from "react";
import StudentComponent_Buttons from "./StudentComponent_Items/StudentComponent_Buttons";
import StudentComponent_Display from "./StudentComponent_Items/StudentComponent_Display";

const StudentComponent = ({ student, deleteStudent }) => {
  return (
    <div className="row py-3 my-2" style={{ backgroundColor: "#8599b4" }}>
      <StudentComponent_Display student={student} />
      <StudentComponent_Buttons
        student={student}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default StudentComponent;
