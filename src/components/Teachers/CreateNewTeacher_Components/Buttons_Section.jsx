import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons_Sections = ({ handleResetForm, handleCreateNewTeacher }) => {
  const navigate = useNavigate();
  function handleGoBack() {
    setTimeout(() => navigate("/teachers"), 300);
  }

  return (
    <div className="row">
      <div className="col">
        <button
          type="submit"
          className="btn text-white fw-bold"
          style={{ backgroundColor: "#1a2d4b" }}
          onClick={handleCreateNewTeacher}
        >
          Create
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn text-white fw-bold"
          style={{ backgroundColor: "#1a2d4b" }}
          onClick={handleResetForm}
        >
          Reset
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn text-white fw-bold"
          style={{ backgroundColor: "#1a2d4b" }}
          onClick={handleGoBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Buttons_Sections;
