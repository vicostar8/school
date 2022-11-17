import React from "react";
import EditStudent_Class_CM from "./EditStudent_Class_CM";
import EditStudent_Class_Letter from "./EditStudent_Class_Letter";
import EditStudent_Class_Number from "./EditStudent_Class_Number";

const EditStudent_Class = ({ student, changeStudentCN, changeStudentCL }) => {
  return (
    <div className="row my-4">
      <EditStudent_Class_Number
        student={student}
        changeStudentCN={changeStudentCN}
      />
      <EditStudent_Class_Letter
        student={student}
        changeStudentCL={changeStudentCL}
      />
      <EditStudent_Class_CM student={student} />
    </div>
  );
};

export default EditStudent_Class;
