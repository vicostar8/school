import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import EditStudent_Buttons from "./EditStudent_Buttons";
import EditStudent_Class from "./EditStudent_Class";
import EditStudent_Names from "./EditStudent_Names";

import { studentBlueprint } from "../../../blueprints/studentBlueprint";
import { validateStudentsForm } from "./../../../validators/studentsValidator";

const EditStudent = ({ editedStudent }) => {
  const [student, setStudent] = useState(studentBlueprint);
  const navigate = useNavigate();
  const { studentID } = useParams();

  useEffect(() => {
    async function getStudent() {
      const { data } = await axios.get(
        `http://localhost:4000/api/students/${studentID}`
      );
      setStudent(data);
    }
    getStudent();
  }, []);

  useEffect(() => {
    if (
      student.memberOfClass.classNumber !== 0 &&
      student.memberOfClass.classLetter !== ""
    ) {
      async function getTeacher() {
        const { data } = await axios.get(
          `http://localhost:4000/api/teachers/${student.memberOfClass.classNumber}/${student.memberOfClass.classLetter}`
        );
        if (data !== "") {
          setStudent({
            ...student,
            classMaster: `${data.firstName} ${data.lastName}`,
          });
        } else {
          setStudent({
            ...student,
            classMaster: "",
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

  const submitEditedStudent = (e) => {
    e.preventDefault();
    const valid = validateStudentsForm(student);
    if (valid) {
      editedStudent(student);
      setTimeout(() => {
        navigate(-1);
      }, 100);
    }
  };

  return (
    <div className="container fw-bold" style={{ backgroundColor: "#8599b4" }}>
      <h1>Edit student</h1>
      <div className="row">
        <div className="col-sm col-md-8">
          <form className="my-4">
            <EditStudent_Names
              student={student}
              changeStudentNames={changeStudentNames}
            />
            <EditStudent_Class
              student={student}
              changeStudentCN={changeStudentClassInfo}
              changeStudentCL={changeStudentClassInfo}
            />
          </form>
        </div>
        <EditStudent_Buttons
          submitEditedStudent={submitEditedStudent}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};

export default EditStudent;
