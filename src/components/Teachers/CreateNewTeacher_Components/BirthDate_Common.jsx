import React from "react";

const BirthDate_Common = ({ colVal, date_item, items, changeBirthDate }) => {
  const string = date_item;

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
        onChange={changeBirthDate}
      >
        {items.map((it) => (
          <option key={it} value={it}>
            {it}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BirthDate_Common;
