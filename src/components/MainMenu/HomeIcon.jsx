import React from "react";
import { Link } from "react-router-dom";

const HomeIcon = () => {
  return (
    <Link className="navbar-brand" to="/">
      <i className="em em-school" aria-label="SCHOOL"></i>
    </Link>
  );
};

export default HomeIcon;
