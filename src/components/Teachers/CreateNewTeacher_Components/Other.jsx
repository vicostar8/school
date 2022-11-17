import React from "react";
import Specialization_Disabled from "./Specialization_Disabled";
import ClassMaster from "./ClassMaster";

const Other = ({
  specialization,
  isClassMaster,
  handleChangeCM,
  handleChangeClass,
  handleChangeLetter,
}) => {
  return (
    <div className="row my-4">
      <Specialization_Disabled specialization={specialization} />
      <ClassMaster
        isClassMaster={isClassMaster}
        handleChangeCM={handleChangeCM}
        handleChangeClass={handleChangeClass}
        handleChangeLetter={handleChangeLetter}
      />
    </div>
  );
};

export default Other;
