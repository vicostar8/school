import React from "react";

const Gender = ({ gender, handleChange }) => {
  return (
    <div className="col-sm-2">
      <label htmlFor="forGender" className="form-label">
        Gender
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forGender"
        name="gender"
        value={gender}
        onChange={handleChange}
      >
        <option></option>
        <option value="M">M</option>
        <option value="F">F</option>
      </select>
    </div>
  );
};

export default Gender;
