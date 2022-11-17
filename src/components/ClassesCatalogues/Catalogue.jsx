import React from "react";
import { Link } from "react-router-dom";

const Catalogue = ({ cN, cL }) => {
  return (
    <Link to={`${cN}-${cL}`} style={{ color: "black" }} className="Link">
      <div
        className="m-2 d-flex justify-content-center align-items-center Catalogue"
        style={{
          width: "200px",
          height: "200px",
          fontSize: "5vh",
        }}
      >{`${cN} ${cL}`}</div>
    </Link>
  );
};

export default Catalogue;
