import React from "react";
import ClassMaster_Class from "./ClassMaster_Class";
import ClassMaster_Is from "./ClassMaster_Is";
import ClassMaster_Letter from "./ClassMaster_Letter";

const ClassMaster = ({
  isClassMaster,
  handleChangeCM,
  handleChangeClass,
  handleChangeLetter,
}) => {
  return (
    <div className="col-md-8">
      <div className="row d-flex justify-content-center align-items-end">
        <ClassMaster_Is handleChangeCM={handleChangeCM} />
        <ClassMaster_Class
          isClassMaster={isClassMaster}
          handleChangeClass={handleChangeClass}
        />
        <ClassMaster_Letter
          isClassMaster={isClassMaster}
          handleChangeLetter={handleChangeLetter}
        />
      </div>
    </div>
  );
};

export default ClassMaster;
