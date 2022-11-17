import React from "react";

const ClassMaster_Is = ({ handleChangeCM }) => {
  return (
    <div className="col">
      <label htmlFor="forCM" className="form-label">
        Class Master
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forCM"
        name="value"
        // value=""
        onChange={handleChangeCM}
      >
        <option>Select</option>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
    </div>
  );
};

export default ClassMaster_Is;
