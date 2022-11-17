import React from "react";
import { Link } from "react-router-dom";

const TeacherProfile_Breadcrumbs = ({ breadcrumb, teacher }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link
            to={`/${breadcrumb.toLowerCase()}`}
            className="text-white fw-bold"
          >
            {breadcrumb}
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {`${teacher.firstName} ${teacher.lastName}`}
        </li>
      </ol>
    </nav>
  );
};

export default TeacherProfile_Breadcrumbs;
