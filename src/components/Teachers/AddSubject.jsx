import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateSubjectForm } from "../../validators/subjectValidator";

const AddSubject = ({ createNewSubject }) => {
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setSubject(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = validateSubjectForm(subject);
    if (result) {
      createNewSubject(subject);
      setTimeout(() => navigate("/teachers"), 300);
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setSubject("");
  }

  return (
    <div className="m-4" style={{ width: "50%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="subjectText" className="form-label">
            Add a new subject
          </label>
          <input
            type="text"
            id="subjectText"
            value={subject}
            className="form-control"
            onChange={handleChange}
          />
          <div className="form-text">E.g: "Romanian / Mathematics"</div>
        </div>
        <button className="btn btn-primary m-3" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-primary m-3" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddSubject;
