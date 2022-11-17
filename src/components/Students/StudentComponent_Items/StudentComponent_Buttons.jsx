import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const StudentComponent_Buttons = ({ student, deleteStudent }) => {
  return (
    <div className="col-md col-lg-4 p-2 d-flex justify-content-center justify-content-md-end align-items-center">
      <Link
        to={`${student.id}`}
        type="button"
        className="btn text-white fw-bold mx-2"
        data-tip="See student profile"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        <ReactTooltip textColor="red" />
        <i className="bi bi-eye fs-4"></i>
      </Link>

      <Link
        to={`add-grade/${student.id}`}
        type="button"
        className="btn text-white fw-bold mx-2"
        data-tip="Add grade"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        <ReactTooltip />
        <i className="bi bi-journal-plus fs-4"></i>
      </Link>
      <Link
        to={`add-absence/${student.id}`}
        type="button"
        className="btn text-white fw-bold mx-2"
        data-tip="Add absence"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        <ReactTooltip />
        <i className="bi bi-clock-history fs-4"></i>
      </Link>
      <Link
        to={`edit-student/${student.id}`}
        type="button"
        className="btn text-white fw-bold mx-2"
        data-tip="Edit student"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        <ReactTooltip />
        <i className="bi bi-pencil-square fs-4"></i>
      </Link>
      <button
        type="button"
        className="btn text-white fw-bold mx-2"
        onClick={() => deleteStudent(student.id)}
        data-tip="Delete student"
        style={{ backgroundColor: "#1a2d4b" }}
      >
        <ReactTooltip />
        <i className="bi bi-trash fs-4"></i>
      </button>
    </div>
  );
};

export default StudentComponent_Buttons;
