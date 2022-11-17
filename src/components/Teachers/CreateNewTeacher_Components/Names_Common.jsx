import React from "react";

const Names_Common = ({ item, nameType, handleChange }) => {
  const string = nameType[0].toUpperCase() + nameType.substring(1);

  return (
    <div className="col-sm-5">
      <label htmlFor={`for${string}Name`} className="form-label">
        {`${string} name`}
      </label>
      <input
        type="text"
        className="form-control"
        id={`for${string}Name`}
        name={`${nameType}Name`}
        value={item}
        onChange={handleChange}
      />
    </div>
  );
};

export default Names_Common;
