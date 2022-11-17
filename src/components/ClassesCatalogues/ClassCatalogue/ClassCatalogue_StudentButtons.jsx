import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const ClassCatalogue_StudentButtons = ({ student }) => {
  return (
    <td>
      <Link
        type="button"
        className="btn btn-dark mx-2"
        to={`/students/${student.id}`}
        data-tip="See student profile"
      >
        <ReactTooltip />
        <i className="bi bi-eye fs-6"></i>
      </Link>

      <Link
        type="button"
        className="btn btn-dark mx-2"
        to={`/students/add-grade/${student.id}`}
        data-tip="Add grade"
      >
        <ReactTooltip />
        <i className="bi bi-journal-plus fs-6"></i>
      </Link>
      <Link
        type="button"
        className="btn btn-dark mx-2"
        to={`/students/add-absence/${student.id}`}
        data-tip="Add absence"
      >
        <ReactTooltip />
        <i className="bi bi-clock-history fs-6"></i>
      </Link>
      <Link
        type="button"
        className="btn btn-dark mx-2"
        to={`/students/edit-student/${student.id}`}
        data-tip="Edit student"
      >
        <ReactTooltip />
        <i className="bi bi-pencil-square fs-6"></i>
      </Link>
    </td>
  );
};

export default ClassCatalogue_StudentButtons;
