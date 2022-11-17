import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { absenceBlueprint } from "../../blueprints/absenceBlueprint";
import AddAbsence_Subject from "./AddAbsence_Items/AddAbsence_Subject";
import AddAbsence_Date from "./AddAbsence_Items/AddAbsence_Date";
import AddAbsence_Buttons from "./AddAbsence_Items/AddAbsence_Buttons";

import { validateAbsenceForm } from "./../../validators/absenceValidator";

const AddAbsence = ({ addAbsence }) => {
  const { studentID } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const navigate = useNavigate();

  const [absence, setAbsence] = useState(absenceBlueprint);

  useEffect(() => {
    async function getSubjects() {
      const fetchedSubjects = await axios.get(
        "https://vicostar-school-backend.herokuapp.com/api/subjects"
      );
      const fetchedStudent = await axios.get(
        `https://vicostar-school-backend.herokuapp.com/api/students/${studentID}`
      );

      setSubjects(fetchedSubjects.data);
      setStudent(fetchedStudent.data);
    }
    getSubjects();
  }, []);

  const handleChange = (e) => {
    setAbsence({ ...absence, [e.target.name]: e.target.value });
  };

  const submitAbsence = (e) => {
    e.preventDefault();

    const valid = validateAbsenceForm(absence);
    if (valid) {
      const studentClone = student;
      studentClone.absents.push(absence);
      setStudent(studentClone);

      setTimeout(() => {
        addAbsence(student);
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
          <h1>Add absence - {`${student.firstName} ${student.lastName}`}</h1>
          <form className="d-flex flex-column justify-content-center align-items-center">
            <AddAbsence_Subject
              subjects={subjects}
              subjectChange={handleChange}
            />
            <AddAbsence_Date dateChange={handleChange} />
            <AddAbsence_Buttons submitAbsence={submitAbsence} />
          </form>
        </div>
      ) : (
        <h1>LOADING...</h1>
      )}
    </React.Fragment>
  );
};

export default AddAbsence;
