import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Contact_GeneralInfo from "./Contact_GeneralInfo";
import ContactForm from "./ContactForm/ContactForm";
import Contact_SendEmail from "./Contact_SendEmail";

import { contactFormBlueprint } from "../../blueprints/contactFormBlueprint";

const Contact = ({ editContactInfo }) => {
  const [info, setInfo] = useState(contactFormBlueprint);

  useEffect(async () => {
    const { data } = await axios.get("http://localhost:4000/api/contact");
    setInfo(data);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container" style={{ backgroundColor: "#8599b4" }}>
            <div className="row">
              <Contact_GeneralInfo info={info} />
              <Contact_SendEmail />
            </div>
          </div>
        }
      />
      <Route
        path="edit-info"
        element={<ContactForm editContactInfo={editContactInfo} />}
      />
    </Routes>
  );
};

export default Contact;
