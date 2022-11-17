import React from "react";

const EditStudent_Class_CM = ({ student }) => {
  return (
    <div className="col-md col-lg-6">
      <label htmlFor="forCM" className="form-label">
        Class master
      </label>
      <input
        type="text"
        id="forCM"
        className="form-control text-center"
        value={student.classMaster}
        disabled
      />
      {student.classMaster === "" && (
        <div id="emailHelp" className="form-text">
          No teacher is master for the selected class!
        </div>
      )}
    </div>
  );
};

export default EditStudent_Class_CM;
