import React from "react";
import AddStudent_Button from "./TopBar_Components/AddStudent_Button";
import SearchBar from "./TopBar_Components/SearchBar";

const Students_TopBar = ({
  updateStudentList,
  setPerPage,
  howManyPerPage,
  resetCurrentPage,
}) => {
  return (
    <div className="row p-2" style={{ backgroundColor: "#1a2d4b" }}>
      <SearchBar
        updateStudentList={updateStudentList}
        setPerPage={setPerPage}
        howManyPerPage={howManyPerPage}
        resetCurrentPage={resetCurrentPage}
      />
      <AddStudent_Button />
    </div>
  );
};

export default Students_TopBar;
