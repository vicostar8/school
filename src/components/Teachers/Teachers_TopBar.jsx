import React from "react";
import AddNewSubject_Button from "./AddNewSubject_Button";

const Teachers_TopBar = ({ changeDisplay }) => {
  return (
    <div className="container-fluid navbar-light d-flex flex-column flex-md-row justify-content-center align-items-center my-3">
      <AddNewSubject_Button />
    </div>
  );
};

export default Teachers_TopBar;
