import React from "react";

import HomePage_SchoolName from "./HomePage_SchoolName";

import "../../css/HomePage.css";

const HomePage = ({ newSchoolName }) => {
  return (
    <div className="container bg-warning HomePage">
      <HomePage_SchoolName newSchoolName={newSchoolName} />
    </div>
  );
};

export default HomePage;
