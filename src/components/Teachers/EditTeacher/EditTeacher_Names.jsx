import React from "react";
import EditTeacher_Names_Common from "./EditTeacher_Names_Common";
import EditTeacher_Genre from "./EditTeacher_Genre";

const EditTeacher_Names = ({ teacher, editTeacher }) => {
  return (
    <div className="row">
      <EditTeacher_Names_Common
        label="first"
        teacher={teacher}
        editTeacher={editTeacher}
      />
      <EditTeacher_Names_Common
        label="last"
        teacher={teacher}
        editTeacher={editTeacher}
      />
      <EditTeacher_Genre gender={teacher.gender} editTeacher={editTeacher} />
    </div>
  );
};

export default EditTeacher_Names;
