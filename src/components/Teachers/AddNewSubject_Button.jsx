import React from "react";
import { Link } from "react-router-dom";

const AddNewSubject_Button = () => {
  return (
    <Link
      type="button"
      className="btn m-2 text-white fw-bold"
      to="add-subject"
      style={{ backgroundColor: "#1a2d4b" }}
    >
      Add subjects
    </Link>
  );
};

export default AddNewSubject_Button;
