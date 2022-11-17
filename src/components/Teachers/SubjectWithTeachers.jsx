import React from "react";
import { useNavigate } from "react-router-dom";
import TeacherComponent from "./TeacherComponent";

import "../../css/SubjectWithTeachers.css";

const SubjectWithTeachers = ({
  subject,
  teachers,
  subjectForm,
  handleDeleteTeacher,
}) => {
  const navigate = useNavigate();

  const teachersFilter = teachers.filter((t) => t.specialization === subject);

  function createNewTeacher() {
    subjectForm(subject);
    setTimeout(() => {
      navigate("create-new-teacher");
    }, 100);
  }

  return (
    <div className="container my-4">
      <div className="text-white fw-bold d-flex flex-column justify-content-center fs-3 my-1 SubjectDiv">
        {subject}
        <i className="bi bi-person-plus" onClick={createNewTeacher}></i>
      </div>
      {/* TEACHERS */}
      {teachersFilter.map((tF) => (
        <TeacherComponent
          key={tF.id}
          teacher={tF}
          handleDeleteTeacher={handleDeleteTeacher}
        />
      ))}
    </div>
  );
};

export default SubjectWithTeachers;
