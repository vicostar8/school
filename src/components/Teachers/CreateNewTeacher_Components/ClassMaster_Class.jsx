import React from "react";
import { generateClasses } from "../../../utils/generateClasses";

const ClassMaster_Class = ({ isClassMaster, handleChangeClass }) => {
  const classes = generateClasses();

  return (
    <div className="col">
      <label htmlFor="forClass" className="form-label">
        Class
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forClass"
        name="number"
        value={isClassMaster.ofClass.number}
        onChange={handleChangeClass}
        disabled={!isClassMaster.value}
      >
        <option value={0}>Select</option>
        {classes.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClassMaster_Class;
