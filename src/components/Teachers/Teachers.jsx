import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Teachers_HomePage from "./Teachers_HomePage";
import AddSubject from "./AddSubject";
import CreateNewTeacher from "./CreateNewTeacher";
import TeacherProfile from "./TeacherProfile";
import EditTeacher from "./EditTeacher/EditTeacher";

import axios from "axios";

const Teachers = ({
  subjects,
  teachers,
  createNewSubject,
  fetchedSubjects,
  fetchedTeachers,
  subjectForm,
  subjectCreateNewTeacher,
  submitNewTeacher,
  handleDeleteTeacher,
  editTeacherSubmit,
}) => {
  useEffect(async () => {
    try {
      const fetchSubjects = await axios.get(
        "https://vicostar-school-backend.herokuapp.com/api/subjects"
      );
      const fetchTeachers = await axios.get(
        "https://vicostar-school-backend.herokuapp.com/api/teachers"
      );

      Promise.all([fetchSubjects, fetchTeachers]).then((values) => {
        const subs = values[0].data.map((sub) => sub.name);
        fetchedSubjects(subs);
        fetchedTeachers(values[1].data);
        // setIsLoading(false);
      });
    } catch (e) {
      alert("ERROR on bringing subjects and teachers ", e);
    }
  }, []);

  return (
    <div className="container-fluid m-0 p-0 d-flex justify-content-center">
      <Routes>
        <Route
          path="/"
          element={
            <Teachers_HomePage
              subjects={subjects}
              teachers={teachers}
              subjectForm={subjectForm}
              subjectCreateNewTeacher={subjectCreateNewTeacher}
              handleDeleteTeacher={handleDeleteTeacher}
            />
          }
        />
        <Route
          path="/add-subject"
          element={<AddSubject createNewSubject={createNewSubject} />}
        />
        <Route
          path="/create-new-teacher"
          element={
            <CreateNewTeacher
              subjects={subjects}
              subjectCreateNewTeacher={subjectCreateNewTeacher}
              submitNewTeacher={submitNewTeacher}
            />
          }
        />
        <Route path=":teacherProfile" element={<TeacherProfile />} />
        <Route
          path="/edit/:teacherID"
          element={
            <EditTeacher
              subjects={subjects}
              editTeacherSubmit={editTeacherSubmit}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Teachers;
