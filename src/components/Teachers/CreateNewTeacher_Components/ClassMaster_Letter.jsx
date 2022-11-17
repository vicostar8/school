import React from "react";
import { generateLetter } from "../../../utils/generateLetter";

const ClassMaster_Letter = ({ isClassMaster, handleChangeLetter }) => {
  const letters = generateLetter();

  return (
    <div className="col">
      <label htmlFor="forLetter" className="form-label">
        Letter
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="forLetter"
        name="char"
        value={isClassMaster.ofClass.char}
        onChange={handleChangeLetter}
        disabled={!isClassMaster.value}
      >
        <option value="">Select</option>
        {letters.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClassMaster_Letter;
