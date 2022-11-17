import React from "react";

const ContactForm_Common = ({ text, info, changeInput }) => {
  return (
    <div className="mb-3 col-sm-12 col-md-7">
      <label htmlFor={`for${text}`} className="form-label">
        {text}
      </label>
      <input
        type="text"
        className="form-control"
        id={`for${text}`}
        name={text.toLowerCase()}
        value={info[`${text.toLowerCase()}`]}
        onChange={changeInput}
      />
    </div>
  );
};

export default ContactForm_Common;
