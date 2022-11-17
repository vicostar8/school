import React from "react";
import EditTeacher_BirthDate_Common from "./EditTeacher_BirthDate_Common";

const EditTeacher_BirthDate = ({
  days,
  months,
  years,
  teacher,
  editTeacherBD,
}) => {
  return (
    <div className="row">
      <h4 className="mt-3 text-center">Birth date</h4>
      {/* DAY*/}
      <EditTeacher_BirthDate_Common
        colVal={3}
        date_item="day"
        items={days}
        teacher={teacher}
        editTeacherBD={editTeacherBD}
      />
      {/* MONTH */}
      <EditTeacher_BirthDate_Common
        colVal={3}
        date_item="month"
        items={months}
        teacher={teacher}
        editTeacherBD={editTeacherBD}
      />
      {/* YEAR */}
      <EditTeacher_BirthDate_Common
        colVal={6}
        date_item="year"
        items={years}
        teacher={teacher}
        editTeacherBD={editTeacherBD}
      />
    </div>
  );
};

export default EditTeacher_BirthDate;
