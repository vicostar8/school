import React from "react";

const EditTeacher_BirthDate_Common = ({
  colVal,
  date_item,
  items,
  teacher,
  editTeacherBD,
}) => {
  const string = date_item;

  const keys = Object.keys(teacher.birthDate);
  const filter = keys.filter((key) => key === date_item);

  return (
    <div className={`col-sm col-md-${colVal}`}>
      <label htmlFor={`for_${date_item}`} className="form-label">
        {string[0].toUpperCase() + string.substring(1)}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id={`for_${date_item}`}
        name={`${date_item}`}
        value={teacher.birthDate[filter[0]]}
        onChange={editTeacherBD}
      >
        {items.map((it) => (
          <option key={it}>{it}</option>
        ))}
      </select>
    </div>
  );
};

export default EditTeacher_BirthDate_Common;
