import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Students_TopBar from "./Students_TopBar";
import Students_List from "./Students_List";
import CreateNewStudent from "./CreateNewStudent/CreateNewStudent";
import StudentProfile from "./StudentProfile";
// import NoStudent from "./NoStudent";
import AddAbsence from "./AddAbsence";
import AddGrade from "./AddGrade";
import EditStudent from "./EditStudent/EditStudent";
import Loading from "../common/Loading";

const Students = ({
  students,
  createNewStudent,
  fetchedStudents,
  deleteStudent,
  addAbsence,
  addGrade,
  editedStudent,
  updateStudentList,
}) => {
  const [howManyPerPage, setHMPP] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/students");
      fetchedStudents(data);
      setIsLoading(false);
    } catch (e) {
      alert("ERROR in retrieving students ", e);
    }
  }, []);

  const setPerPage = (itemsPerPage) => {
    setHMPP(itemsPerPage);
  };

  const updateCurrentPage = (cPage) => {
    setCurrentPage(cPage);
  };

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [howManyPerPage]);

  return (
    <div className="container p-0">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Students_TopBar
                updateStudentList={updateStudentList}
                setPerPage={setPerPage}
                howManyPerPage={howManyPerPage}
                resetCurrentPage={resetCurrentPage}
              />
              {isLoading && <Loading />}
              {!isLoading && (
                <Students_List
                  students={students}
                  deleteStudent={deleteStudent}
                  howManyPerPage={howManyPerPage}
                  currentPage={currentPage}
                  updateCurrentPage={updateCurrentPage}
                />
              )}
            </React.Fragment>
          }
        />
        <Route
          path="/create-new-student"
          element={<CreateNewStudent createNewStudent={createNewStudent} />}
        />
        <Route path=":studentID" element={<StudentProfile />} />
        <Route
          path="/add-grade/:studentID"
          element={<AddGrade addGrade={addGrade} />}
        />
        <Route
          path="/add-absence/:studentID"
          element={<AddAbsence addAbsence={addAbsence} />}
        />
        <Route
          path="/edit-student/:studentID"
          element={<EditStudent editedStudent={editedStudent} />}
        />
      </Routes>
    </div>
  );
};

export default Students;
