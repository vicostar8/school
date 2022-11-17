import React from "react";
import { useNavigate } from "react-router-dom";

const AddAbsence_Buttons = ({ submitAbsence }) => {
  const navigate = useNavigate();

  return (
    <div className="row d-flex justify-content-center align-items-center py-2">
      <button
        type="button"
        className="col btn text-white fw-bold mx-3"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={submitAbsence}
      >
        Confirm
      </button>
      <button
        type="button"
        className="col btn text-white fw-bold mx-3"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default AddAbsence_Buttons;
