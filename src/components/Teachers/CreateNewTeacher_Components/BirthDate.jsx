import React from "react";
import BirthDate_Common from "./BirthDate_Common";

const BirthDate = ({ days, months, years, changeBirthDate }) => {
  return (
    <div className="row">
      <h4 className="mt-3 text-center">Birth date</h4>
      {/* DAY*/}
      <BirthDate_Common
        colVal={3}
        date_item="day"
        items={days}
        changeBirthDate={changeBirthDate}
      />
      {/* MONTH */}
      <BirthDate_Common
        colVal={3}
        date_item="month"
        items={months}
        changeBirthDate={changeBirthDate}
      />
      {/* YEAR */}
      <BirthDate_Common
        colVal={6}
        date_item="year"
        items={years}
        changeBirthDate={changeBirthDate}
      />
    </div>
  );
};

export default BirthDate;
