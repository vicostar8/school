import React from "react";
import { useNavigate } from "react-router-dom";

const EditStudent_Buttons = ({ submitEditedStudent, resetForm }) => {
  const navigate = useNavigate();

  return (
    <div className="col-sm col-md-4 d-flex flex-column">
      <button
        type="button"
        className="btn text-white fw-bold m-4"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={submitEditedStudent}
      >
        Confirm
      </button>
      <button
        type="button"
        className="btn text-white fw-bold m-4"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={resetForm}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn text-white fw-bold m-4"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default EditStudent_Buttons;
