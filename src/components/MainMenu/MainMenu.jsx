import React from "react";
import HomeIcon from "./HomeIcon";
import MainMenu_Items from "./MainMenu_Items";
import ToggleButton from "./ToggleButton";

const MainMenu = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#ffa500" }}
    >
      <div className="container-fluid">
        <HomeIcon />
        <ToggleButton />
        <MainMenu_Items />
      </div>
    </nav>
  );
};

export default MainMenu;
