import React from "react";
import SubjectWithTeachers from "./SubjectWithTeachers";

const DisplayTeachers_BySubject = ({
  subjects,
  teachers,
  subjectForm,
  handleDeleteTeacher,
}) => {
  return (
    <div className="container-fluid m-0 p-0">
      {subjects.map((subject) => (
        <SubjectWithTeachers
          key={subject}
          subject={subject}
          teachers={teachers}
          subjectForm={subjectForm}
          handleDeleteTeacher={handleDeleteTeacher}
        />
      ))}
    </div>
  );
};

export default DisplayTeachers_BySubject;
