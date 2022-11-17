import React from "react";

const Absents = ({ absents }) => {
  return (
    <div className="table-responsive">
      {absents.length === 0 && (
        <React.Fragment>
          <h1>No absents available!</h1>
        </React.Fragment>
      )}
      {absents.length !== 0 && (
        <React.Fragment>
          <h1 className="my-3">Absents</h1>
          <table className="table table-striped bg-light border border-dark border-2 align-middle">
            <thead>
              <tr>
                <th scope="col">Date</th>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default Absents;
