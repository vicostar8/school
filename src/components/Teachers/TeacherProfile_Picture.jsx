import React from "react";

const TeacherProfile_Picture = ({ teacher }) => {
  return (
    <div className="col-sm col-md-5 my-2 d-flex flex-column justify-content-center align-items-center">
      <img
        src={`${teacher.profilePicture}`}
        style={{ width: "100%", height: "100%" }}
        className="rounded"
      />
    </div>
  );
};

export default TeacherProfile_Picture;
