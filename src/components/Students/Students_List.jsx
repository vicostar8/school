import React from "react";
import Pagination from "../common/Pagination";
import StudentComponent from "./StudentComponent";

import _ from "lodash";

const Students_List = ({
  students,
  deleteStudent,
  howManyPerPage,
  currentPage,
  updateCurrentPage,
}) => {
  const index = (currentPage - 1) * howManyPerPage;
  const nextIndex = currentPage * howManyPerPage - 1;
  const toDisplay = _.slice(students, index, nextIndex + 1);

  const pages = _.range(1, Math.ceil(students.length / howManyPerPage) + 1);

  return (
    <div className="container m-0">
      {toDisplay.map((student) => (
        <StudentComponent
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
      {/* PAGINATION */}
      <div className="row my-3">
        <Pagination
          pages={pages}
          updateCurrentPage={updateCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Students_List;
