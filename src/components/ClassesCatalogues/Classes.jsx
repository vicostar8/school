import React, { useState, useEffect } from "react";
import ClassCatalogue from "./ClassCatalogue/ClassCatalogue";
import Catalogue from "./Catalogue";

import { generateClasses } from "./../../utils/generateClasses";
import { generateLetter } from "./../../utils/generateLetter";
import { Route, Routes } from "react-router-dom";

import "../../css/Catalogue.css";

const Classes = () => {
  const classNumbers = generateClasses();
  const letters = generateLetter();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container bg-light">
            <h1 className="p-3 CatalogueRow" style={{ color: "#1a2d4b" }}>
              Catalogues
            </h1>
            {classNumbers.map((cN, i) => (
              <div
                key={`${i}-${cN}`}
                className="d-flex flex-wrap justify-content-evenly border my-4 p-4 CatalogueRow"
              >
                {letters.map((cL, j) => (
                  <Catalogue key={`${j}-${cL}`} cN={cN} cL={cL} />
                ))}
              </div>
            ))}
          </div>
        }
      />
      <Route path={`:class`} element={<ClassCatalogue />} />
      <Route path="/*" element={<h1>Class not found!</h1>} />
    </Routes>
  );
};

export default Classes;
