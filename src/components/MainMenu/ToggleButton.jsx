import React from "react";

const ToggleButton = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ backgroundColor: "#1a2d4b" }}
    >
      <span className="">
        <i className="bi bi-list text-white fw-bold fs-1"></i>
      </span>
    </button>
  );
};

export default ToggleButton;
