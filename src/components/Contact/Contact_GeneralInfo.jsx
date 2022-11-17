import React from "react";
import { Link } from "react-router-dom";

const Contact_GeneralInfo = ({ info }) => {
  return (
    <div className="col-md col-lg-6 p-5 " style={{ position: "relative" }}>
      <Link to="/contact/edit-info">
        <i
          className="bi bi-pencil-square fs-3 mt-2 me-2"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            color: "#1a2d4b",
          }}
        ></i>
      </Link>
      <div className="border border-dark border-3">
        <h1
          className="text-white fw-bold p-3"
          style={{ backgroundColor: "#1a2d4b" }}
        >
          Address
        </h1>
        <div className="text-center p-3 fs-4">{info.address}</div>
      </div>
      <div className="border border-dark border-3 mt-5">
        <h1
          className="text-white fw-bold p-3"
          style={{ backgroundColor: "#1a2d4b" }}
        >
          Contact
        </h1>
        <div className="text-start p-3 fs-4">Phone: {info.phone}</div>
        <div
          className="text-start p-3 fs-4 "
          style={{ overflowWrap: "break-word" }}
        >
          Email: {info.email}
        </div>
      </div>
    </div>
  );
};

export default Contact_GeneralInfo;
