import React from "react";
import { useNavigate } from "react-router-dom";

const AddGrade_Buttons = ({ submitGrade }) => {
  const navigate = useNavigate();

  return (
    <div className="row d-flex justify-content-center align-items-center py-2">
      <button
        type="button"
        className="col btn text-white fw-bold mx-3"
        style={{ backgroundColor: "#1a2d4b" }}
        onClick={submitGrade}
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

export default AddGrade_Buttons;
