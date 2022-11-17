import React from "react";
import Teachers_TopBar from "./Teachers_TopBar";
import DisplayTeachers_BySubject from "./DisplayTeachers_BySubject";

const Teachers_HomePage = ({
  subjects,
  teachers,
  subjectForm,
  handleDeleteTeacher,
}) => {
  return (
    <div className="container-fluid m-0 p-0">
      <Teachers_TopBar />
      {subjects.length === 0 && <h1>Loading...</h1>}
      {subjects.length > 0 && (
        <DisplayTeachers_BySubject
          subjects={subjects}
          teachers={teachers}
          subjectForm={subjectForm}
          handleDeleteTeacher={handleDeleteTeacher}
        />
      )}
    </div>
  );
};

export default Teachers_HomePage;
