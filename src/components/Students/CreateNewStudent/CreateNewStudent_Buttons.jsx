import React from "react";
import { Link } from "react-router-dom";

const CreateNewStudent_Buttons = ({ submitNewStudent, resetForm }) => {
  return (
    <div className="col-sm col-md-4 bg-success d-flex flex-column">
      <button
        type="button"
        className="btn btn-dark m-4"
        onClick={submitNewStudent}
      >
        Create
      </button>
      <button type="button" className="btn btn-dark m-4" onClick={resetForm}>
        Reset
      </button>
      <Link to="/students" type="button" className="btn btn-dark m-4">
        Back
      </Link>
    </div>
  );
};

export default CreateNewStudent_Buttons;
