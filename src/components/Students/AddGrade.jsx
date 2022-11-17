import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import AddGrade_Subject from "./AddGrade_Items/AddGrade_Subject";
import AddGrade_Grade from "./AddGrade_Items/AddGrade_Grade";
import AddGrade_Buttons from "./AddGrade_Items/AddGrade_Buttons";

import { validateGradeForm } from "../../validators/gradeValidator";
import { gradeBlueprint } from "./../../blueprints/gradeBlueprint";

const AddGrade = ({ addGrade }) => {
  const { studentID } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const [grade, setGrade] = useState(gradeBlueprint);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSubjects() {
      const fetchedSubjects = await axios.get(
        "http://localhost:4000/api/subjects"
      );
      const fetchedStudent = await axios.get(
        `http://localhost:4000/api/students/${studentID}`
      );

      setSubjects(fetchedSubjects.data);
      setStudent(fetchedStudent.data);
    }
    getSubjects();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "grade")
      setGrade({ ...grade, [e.target.name]: parseInt(e.target.value) });
    else setGrade({ ...grade, [e.target.name]: e.target.value });
  };

  const submitGrade = (e) => {
    e.preventDefault();

    const valid = validateGradeForm(grade);
    if (valid) {
      const studentClone = student;
      let nr = studentClone.reportBook.length;
      let i = 0;
      let found = 0;

      if (nr > 0) {
        while (nr > 0) {
          if (grade.subject === studentClone.reportBook[i].subject) {
            found = 1;
            nr = 0;
          } else {
            nr--;
            i++;
          }
        }
      }

      if (found === 1) {
        studentClone.reportBook[i].subject = grade.subject;
        studentClone.reportBook[i].grades.push(grade.grade);
      } else if (found === 0) {
        studentClone.reportBook.push({
          subject: grade.subject,
          grades: [grade.grade],
        });
      }

      setStudent(studentClone);

      setTimeout(() => {
        addGrade(student);
        navigate(-1);
      }, 100);
    }
  };

  return (
    <React.Fragment>
      {subjects.length !== 0 && Object.keys(student).length !== 0 ? (
        <div
          className="container p-4 fw-bold"
          style={{ backgroundColor: "#8599b4" }}
        >
          <h1>Add Grade - {`${student.firstName} ${student.lastName}`}</h1>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <AddGrade_Subject
              subjects={subjects}
              subjectChange={handleChange}
            />
            <AddGrade_Grade gradeChange={handleChange} />
            <AddGrade_Buttons submitGrade={submitGrade} />
          </form>
        </div>
      ) : (
        <h1>LOADING...</h1>
      )}
    </React.Fragment>
  );
};

export default AddGrade;
