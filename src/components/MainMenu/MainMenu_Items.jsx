import React from "react";

import MainMenu_Item from "./MainMenu_Item";

const MainMenu_Items = () => {
  const mainMenu_items = [
    "Teachers",
    "Students",
    "Classes",
    "Canteen menu",
    "Contact",
  ];

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {mainMenu_items.map((item) => (
          <MainMenu_Item key={item} menuItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default MainMenu_Items;
