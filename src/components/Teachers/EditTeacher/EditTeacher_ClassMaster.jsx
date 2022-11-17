import React from "react";
import EditTeacher_Other_ClassMaster_Is from "./EditTeacher_Other_ClassMaster_Is";
import EditTeacher_Other_ClassMaster_Class from "./EditTeacher_Other_ClassMaster_Class";
import EditTeacher_Other_ClassMaster_Letter from "./EditTeacher_Other_ClassMaster_Letter";

const EditTeacher_ClassMaster = ({
  teacher,
  editTeacherCM,
  editTeacherCM_Class,
  editTeacherCM_Letter,
}) => {
  return (
    <div className="col-md-8">
      <div className="row d-flex justify-content-center align-items-end">
        <EditTeacher_Other_ClassMaster_Is
          teacher={teacher}
          editTeacherCM={editTeacherCM}
        />
        <EditTeacher_Other_ClassMaster_Class
          teacher={teacher}
          editTeacherCM_Class={editTeacherCM_Class}
        />
        <EditTeacher_Other_ClassMaster_Letter
          teacher={teacher}
          editTeacherCM_Letter={editTeacherCM_Letter}
        />
      </div>
    </div>
  );
};

export default EditTeacher_ClassMaster;
