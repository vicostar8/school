import React from "react";
import { average } from "../../utils/averageCalc";

const Grades = ({ grades }) => {
  const generalAverage = () => {
    let averages = [];
    for (let i = 0; i < grades.length; i++) {
      averages.push(average(grades[i].grades));
    }
    return average(averages);
  };

  return (
    <div className="table-responsive">
      {grades.length === 0 && <h1>No grades available!</h1>}
      {grades.length !== 0 && (
        <React.Fragment>
          <h1 className="my-3">Grades</h1>
          <table className="table table-striped bg-light border border-dark border-2 align-middle">
            <thead>
              <tr>
                <th scope="col" className="col-1 col-md-3">
                  Subject
                </th>
                <th scope="col" className="col col-md-3">
                  Grades
                </th>
                <th scope="col" className="col-1 col-md-3">
                  Average
                </th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.subject}>
                  <td>{grade.subject}</td>
                  <td>{` ${grade.grades
                    .sort(function (a, b) {
                      return a - b;
                    })
                    .join(" , ")} `}</td>
                  <td>{average(grade.grades)}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th scope="col">General average: {generalAverage()}</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
          </table>
        </React.Fragment>
      )}
    </div>
  );
};

export default Grades;
