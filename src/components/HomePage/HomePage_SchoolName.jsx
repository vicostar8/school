import React, { useState, useEffect } from "react";
import axios from "axios";
import { validateSchoolName } from "./../../validators/validateSchoolName";

const HomePage_SchoolName = ({ newSchoolName }) => {
  const [schoolName, setSchoolName] = useState("");
  const [initialSN, setInitialSN] = useState("");
  const [editSchoolName, setEditSchoolName] = useState(false);

  const snIcon = editSchoolName ? "check-circle-fill" : "pencil-square";

  useEffect(async () => {
    try {
      const { data } = await axios.get(
        "https://vicostar-school-backend.herokuapp.com/api/schoolInfo"
      );
      setSchoolName(data.name);
      setInitialSN(data.name);
    } catch (e) {
      alert("Error while retrieving school name!: ", e);
    }
  }, []);

  const toggleESN = () => {
    setEditSchoolName(true);
  };

  const changeInput = (e) => {
    setSchoolName(e.target.value);
  };

  const submitNewSchoolName = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valid = validateSchoolName(schoolName);

      if (!valid) {
        setSchoolName(initialSN);
      } else {
        if (schoolName === initialSN) {
          setEditSchoolName(false);
        }
        if (schoolName !== initialSN) {
          setEditSchoolName(false);
          newSchoolName(schoolName);
        }
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-1">
      <div style={{ position: "relative" }}>
        {!editSchoolName && (
          <h1 className="px-4">
            {schoolName}
            <i
              className={`bi bi-${snIcon} fs-5`}
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={toggleESN}
            ></i>
          </h1>
        )}
        {editSchoolName && (
          <form className="p-4" onKeyPress={submitNewSchoolName}>
            <input
              type="text"
              className="form-control"
              value={schoolName}
              onChange={changeInput}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default HomePage_SchoolName;
