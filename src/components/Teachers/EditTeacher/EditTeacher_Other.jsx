import React from "react";
import EditTeacher_Other_Specialization from "./EditTeacher_Other_Specialization";
import EditTeacher_ClassMaster from "./EditTeacher_ClassMaster";

const EditTeacher_Other = ({
  subjects,
  teacher,
  editTeacher,
  editTeacherCM,
  editTeacherCM_Class,
  editTeacherCM_Letter,
}) => {
  return (
    <div className="row my-4">
      <EditTeacher_Other_Specialization
        subjects={subjects}
        teacher={teacher}
        editTeacher={editTeacher}
      />
      <EditTeacher_ClassMaster
        teacher={teacher}
        editTeacherCM={editTeacherCM}
        editTeacherCM_Class={editTeacherCM_Class}
        editTeacherCM_Letter={editTeacherCM_Letter}
      />
    </div>
  );
};

export default EditTeacher_Other;
