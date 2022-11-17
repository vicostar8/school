import React from "react";
import { useNavigate } from "react-router-dom";

const EditTeacher_ButtonsSection = ({ editTeacherSub, editTeacherRST }) => {
  const navigate = useNavigate();

  const editTeacherGB = () => {
    setTimeout(() => navigate("/teachers"), 300);
  };

  return (
    <div className="row">
      <div className="col">
        <button
          type="submit"
          className="btn text-white fw-bold"
          onClick={editTeacherSub}
          style={{ backgroundColor: "#1a2d4b" }}
        >
          Confirm
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn text-white fw-bold"
          onClick={editTeacherRST}
          style={{ backgroundColor: "#1a2d4b" }}
        >
          Reset
        </button>
      </div>
      <div className="col">
        <button
          type="button"
          className="btn text-white fw-bold"
          onClick={editTeacherGB}
          style={{ backgroundColor: "#1a2d4b" }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EditTeacher_ButtonsSection;
