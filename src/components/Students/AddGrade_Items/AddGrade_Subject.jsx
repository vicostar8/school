import React from "react";

const AddGrade_Subject = ({ subjects, subjectChange }) => {
  return (
    <div className="row justify-content-center align-items-center py-2">
      <div className="col-auto">
        <label htmlFor="subjects">Subject:</label>
      </div>
      <div className="col-auto">
        <select
          className="form-select"
          aria-label="Default select example"
          id="subjects"
          name="subject"
          defaultValue=""
          onChange={subjectChange}
        >
          <option value="">Select subject</option>
          {subjects.map((subject) => (
            <option key={subject.name} value={subject.name}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AddGrade_Subject;
