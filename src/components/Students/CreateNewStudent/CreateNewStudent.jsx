import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import CreateNewStudent_Buttons from "./CreateNewStudent_Buttons";
import CreateNewStudent_Class from "./CreateNewStudent_Class";
import CreateNewStudent_Names from "./CreateNewStudent_Names";

import { studentBlueprint } from "../../../blueprints/studentBlueprint";
import { validateStudentsForm } from "./../../../validators/studentsValidator";

const CreateNewStudent = ({ createNewStudent }) => {
  const [student, setStudent] = useState(studentBlueprint);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      student.memberOfClass.classNumber !== 0 &&
      student.memberOfClass.classLetter !== ""
    ) {
      async function getTeacher() {
        const { data } = await axios.get(
          `https://vicostar-school-backend.herokuapp.com/api/teachers/${student.memberOfClass.classNumber}/${student.memberOfClass.classLetter}`
        );
        if (data !== "") {
          setStudent({
            ...student,
            classMaster: `${data.firstName} ${data.lastName}`,
          });
        }
      }
      getTeacher();
    }

    if (
      student.memberOfClass.classNumber === 0 ||
      student.memberOfClass.classLetter === ""
    ) {
      setStudent({
        ...student,
        classMaster: "",
      });
    }
  }, [student.memberOfClass.classNumber, student.memberOfClass.classLetter]);

  const changeStudentClassInfo = (e) => {
    if (e.target.name === "classNumber")
      setStudent({
        ...student,
        memberOfClass: {
          ...student.memberOfClass,
          [e.target.name]: parseInt(e.target.value),
        },
      });
    if (e.target.name === "classLetter")
      setStudent({
        ...student,
        memberOfClass: {
          ...student.memberOfClass,
          [e.target.name]: e.target.value,
        },
      });
  };

  const changeStudentNames = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setStudent({
      ...student,
      firstName: "",
      lastName: "",
      memberOfClass: { classNumber: 0, classLetter: "" },
    });
  };

  const submitNewStudent = (e) => {
    e.preventDefault();
    const valid = validateStudentsForm(student);
    if (valid) {
      createNewStudent({ ...student, id: uuidv4() });
      setTimeout(() => {
        navigate("/students");
      }, 100);
    }
  };

  return (
    <div className="container bg-secondary">
      <h1>Add new student</h1>
      <div className="row">
        <div className="col-sm col-md-8 bg-warning">
          <form className="my-4">
            <CreateNewStudent_Names
              student={student}
              changeStudentNames={changeStudentNames}
            />
            <CreateNewStudent_Class
              student={student}
              changeStudentCN={changeStudentClassInfo}
              changeStudentCL={changeStudentClassInfo}
            />
          </form>
        </div>
        <CreateNewStudent_Buttons
          submitNewStudent={submitNewStudent}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};

export default CreateNewStudent;
