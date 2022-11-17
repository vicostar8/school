import React from "react";
import { Link } from "react-router-dom";

const MainMenu_Item = ({ menuItem }) => {
  return (
    <li className="nav-item">
      <Link
        className="nav-link active fw-bold fs-5"
        to={`${menuItem.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {menuItem}
      </Link>
    </li>
  );
};

export default MainMenu_Item;
