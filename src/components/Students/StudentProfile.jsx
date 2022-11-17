import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Absents from "./Absents";
import Grades from "./Grades";

const StudentProfile = () => {
  const { studentID } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function getStudent() {
      const { data } = await axios.get(
        `http://localhost:4000/api/students/${studentID}`
      );
      setStudent(data);
    }
    getStudent();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(student).length !== 0 && (
        <div className="p-3 fw-bold" style={{ backgroundColor: "#8599b4" }}>
          <h1 className="my-3">{`${student.firstName} ${student.lastName} - [${student.memberOfClass.classNumber} - ${student.memberOfClass.classLetter}]`}</h1>
          {student.classMaster !== "" && (
            <h2 className="my-3">{`Master class: ${student.classMaster}`}</h2>
          )}
          <Absents absents={student.absents} />
          <Grades grades={student.reportBook} />
        </div>
      )}
    </React.Fragment>
  );
};

export default StudentProfile;
