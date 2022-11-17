import React from "react";
import Names_Common from "./Names_Common";
import Gender from "./Gender";

const Names = ({ firstName, lastName, gender, handleChange }) => {
  return (
    <div className="row">
      <Names_Common
        item={firstName}
        nameType="first"
        handleChange={handleChange}
      />
      <Names_Common
        item={lastName}
        nameType="last"
        handleChange={handleChange}
      />
      <Gender gender={gender} handleChange={handleChange} />
    </div>
  );
};

export default Names;
