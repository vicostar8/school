import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ContactForm_Common from "./ContactForm_Common";

import { validateContactForm } from "../../../validators/validateContactForm";
import { contactFormBlueprint } from "./../../../blueprints/contactFormBlueprint";

const ContactForm = ({ editContactInfo }) => {
  const [info, setInfo] = useState(contactFormBlueprint);

  useEffect(async () => {
    const { data } = await axios.get(
      "https://vicostar-school-backend.herokuapp.com/api/contact"
    );
    setInfo(data);
  }, []);

  const changeInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const resetForm = (e) => {
    e.preventDefault();
    setInfo(contactFormBlueprint);
  };
  const submitForm = (e) => {
    const valid = validateContactForm(info);
    if (valid) {
      e.preventDefault();
      editContactInfo(info);
    }
  };

  return (
    <div className="container p-4" style={{ backgroundColor: "#8599b4" }}>
      <form className="row justify-content-center">
        <ContactForm_Common
          text="Address"
          changeInput={changeInput}
          info={info}
        />
        <ContactForm_Common
          text="Phone"
          changeInput={changeInput}
          info={info}
        />
        <ContactForm_Common
          text="Email"
          changeInput={changeInput}
          info={info}
        />
        <div className="my-4">
          <button
            type="button"
            className="btn mx-5 text-white fw-bold"
            style={{ backgroundColor: "#1a2d4b" }}
            onClick={submitForm}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn mx-5 text-white fw-bold"
            style={{ backgroundColor: "#1a2d4b" }}
            onClick={resetForm}
          >
            Reset
          </button>
          <Link
            to="/contact"
            type="button"
            className="btn mx-5 text-white fw-bold"
            style={{ backgroundColor: "#1a2d4b" }}
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
