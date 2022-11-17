import React from "react";
import { Link } from "react-router-dom";
import "../../css/TeacherComponent.css";
import ReactTooltip from "react-tooltip";

const TeacherComponent = ({ teacher, handleDeleteTeacher }) => {
  return (
    <div className="row p-2 m-0 TeacherComponent">
      <div className="col-6 col-md-3">
        <img
          src={teacher.profilePicture}
          alt={`Profile picture for ${teacher.firstName} ${teacher.lastName}`}
          style={{ width: "20%", height: "100%" }}
          className="rounded-circle"
        />
      </div>
      <div className="col-6 col-md-4 fs-3 fw-bold">
        {`${teacher.firstName} ${teacher.lastName}`}
      </div>
      <div className="col col-md-5 TeacherComponent">
        <div className="row fs-3 mt-3 mt-md-0" style={{ width: "100%" }}>
          <div className="col">
            <Link to={`${teacher.id}`} data-tip="See teacher profile">
              <ReactTooltip />
              <i className="bi bi-eye-fill AnimUp"></i>
            </Link>
          </div>
          <div className="col">
            <Link to={`edit/${teacher.id}`} data-tip="Edit teacher">
              <ReactTooltip />
              <i className="bi bi-pencil-square AnimUp"></i>
            </Link>
          </div>
          <div className="col" data-tip="Delete student">
            <ReactTooltip />
            <i
              className="bi bi-trash-fill AnimUp"
              onClick={() => handleDeleteTeacher(teacher.id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherComponent;
