import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import TeacherProfile_Text from "./TeacherProfile_Text";
import TeacherProfile_Picture from "./TeacherProfile_Picture";
import TeacherProfile_Breadcrumbs from "./TeacherProfile_Breadcrumbs";

import { getBreadcrumbsForTeacher } from "./../../utils/getBreadcrumbsForTeacher";

const TeacherProfile = () => {
  const { teacherProfile } = useParams();
  const [teacher, setTeacher] = useState({});
  const { pathname } = useLocation();

  const breadcrumb = getBreadcrumbsForTeacher(pathname);

  useEffect(() => {
    async function getTeacher() {
      const { data } = await axios.get(
        `https://vicostar-school-backend.herokuapp.com/api/teachers/${teacherProfile}`
      );
      setTeacher(data);
    }
    getTeacher();
  }, []);

  return (
    <React.Fragment>
      {Object.keys(teacher).length === 0 && <h1>LOADING...</h1>}
      {Object.keys(teacher).length > 0 && (
        <div
          className="container p-4 m-3"
          style={{ backgroundColor: "#1a2d4b" }}
        >
          <TeacherProfile_Breadcrumbs
            breadcrumb={breadcrumb}
            teacher={teacher}
          />
          <div className="row p-3 border border-white border-5">
            <TeacherProfile_Picture teacher={teacher} />
            <TeacherProfile_Text teacher={teacher} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default TeacherProfile;
