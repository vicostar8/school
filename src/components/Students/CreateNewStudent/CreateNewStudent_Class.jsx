import React from "react";
import CreateNewStudent_Class_CM from "./CreateNewStudent_Class_CM";
import CreateNewStudent_Class_Letter from "./CreateNewStudent_Class_Letter";
import CreateNewStudent_Class_Number from "./CreateNewStudent_Class_Number";

const CreateNewStudent_Class = ({
  student,
  changeStudentCN,
  changeStudentCL,
}) => {
  return (
    <div className="row my-4">
      <CreateNewStudent_Class_Number
        student={student}
        changeStudentCN={changeStudentCN}
      />
      <CreateNewStudent_Class_Letter
        student={student}
        changeStudentCL={changeStudentCL}
      />
      <CreateNewStudent_Class_CM student={student} />
    </div>
  );
};

export default CreateNewStudent_Class;
