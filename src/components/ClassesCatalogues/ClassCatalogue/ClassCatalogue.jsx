import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ClassCatalogue_StudentButtons from "./ClassCatalogue_StudentButtons";
import Loading from "../../common/Loading";

import { average } from "../../../utils/averageCalc";

const ClassCatalogue = ({}) => {
  const params = useParams();

  const [classMaster, setClassMaster] = useState("");
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const theClass = params.class.split("-");
  const cN = theClass[0];
  const cL = theClass[1];

  const totalClassAverage = () => {
    let averages = [];
    for (let i = 0; i < students.length; i++) {
      let studentSubjectAverage = [];
      for (let j = 0; j < students[i].reportBook.length; j++) {
        studentSubjectAverage.push(average(students[i].reportBook[j].grades));
      }
      isNaN(average(studentSubjectAverage))
        ? averages.push(0)
        : averages.push(average(studentSubjectAverage));
    }
    return average(averages);
  };

  useEffect(async () => {
    try {
      const getClassMaster = await axios.get(
        `http://localhost:4000/api/teachers/${cN}/${cL}`
      );
      const getStudents = await axios.get(
        `http://localhost:4000/api/students/${cN}/${cL}`
      );
      Promise.all([getClassMaster, getStudents]).then((values) => {
        setClassMaster(values[0].data);
        setStudents(values[1].data);
        setIsLoading(false);
      });
    } catch (e) {
      alert("Could not access Class masters / Students: ", e);
    }
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <h3 className="text-start m-3">{`Class ${cN} ${cL}`}</h3>
          <h3 className="text-start m-3">{`Class master: ${
            classMaster.firstName === undefined &&
            classMaster.lastName === undefined
              ? "None"
              : `${classMaster.firstName} ${classMaster.lastName}`
          }`}</h3>
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={student.id}>
                  <th scope="row">{idx + 1}</th>
                  <td>{`${student.firstName} ${student.lastName}`}</td>
                  <ClassCatalogue_StudentButtons student={student} />
                </tr>
              ))}
            </tbody>
          </table>

          <h5 className="text-start fw-bold ms-3">
            Total students : {students.length}
          </h5>
          <h5 className="text-start fw-bold ms-3">
            Class total average : {totalClassAverage()}
          </h5>
        </div>
      )}
    </React.Fragment>
  );
};

export default ClassCatalogue;
