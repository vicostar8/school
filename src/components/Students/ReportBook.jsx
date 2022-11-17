import React from "react";

const ReportBook = ({ reportBook }) => {
  return (
    <div className="collapse m-2" id="collapseAbsents">
      <div className="card card-body d-flex">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Subject</th>
            </tr>
          </thead>
          <tbody>
            {absents.map((absent, idx) => (
              <tr key={`${absent.date}${absent.subject}${idx}`}>
                <td>{absent.date}</td>
                <td>{absent.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportBook;
