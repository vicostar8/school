import React from "react";

const Specialization_Disabled = ({ specialization }) => {
  return (
    <div className="col-md-4 mb-3">
      <label htmlFor="forSpec" className="form-label">
        Specialization
      </label>
      <input
        type="text"
        className="form-control text-center"
        id="forSpec"
        name="specialization"
        value={specialization}
        disabled
      />
    </div>
  );
};

export default Specialization_Disabled;
