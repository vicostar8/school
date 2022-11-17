import React from "react";
import { Link } from "react-router-dom";

const AddStudent_Button = () => {
  return (
    <div
      className="col-sm d-flex justify-content-center justify-content-md-end"
      style={{ width: "100%" }}
    >
      <Link
        type="button"
        to="create-new-student"
        className="btn m-2 text-white fw-bold"
        style={{ backgroundColor: "#8599b4" }}
      >
        Add student
      </Link>
    </div>
  );
};

export default AddStudent_Button;
