import React from "react";

const Loading = () => {
  return (
    <div
      style={{ width: "100%", height: "93vh", backgroundColor: "#8599b4" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1 className="my-5 fw-bold">Loading...</h1>
    </div>
  );
};

export default Loading;
