import React from "react";

const AddAbsence_Date = ({ dateChange }) => {
  return (
    <div className="row justify-content-center align-items-center py-2">
      <div className="col-auto">
        <label htmlFor="date">Date: </label>
      </div>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id="date"
          name="date"
          defaultValue=""
          onChange={dateChange}
        />
        <div id="date" className="form-text text-white fw-bold">
          E.g. - 12/1/2022
        </div>
      </div>
    </div>
  );
};

export default AddAbsence_Date;
