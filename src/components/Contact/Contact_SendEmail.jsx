import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { validateMailForm } from "./../../validators/validateMailForm";

const Contact_SendEmail = () => {
  const [mailForm, setMailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const resetMailForm = (e) => {
    e.preventDefault();
    setMailForm({ name: "", email: "", subject: "", message: "" });
  };

  const editInput = (e) => {
    setMailForm({ ...mailForm, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = validateMailForm(mailForm);
    if (valid) {
      emailjs
        .sendForm(
          "service_6xxelxh",
          "template_daal2uc",
          // form.current,
          e.target,
          "Qb4hsJWJcyNGtvgAr"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMailForm({ name: "", email: "", subject: "", message: "" });
      alert("Email has been sent!");
    }
  };

  return (
    <div className="col-md col-lg-6 p-3">
      <form className="" onSubmit={sendEmail}>
        <div className="my-3">
          <label htmlFor="forNames" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="forNames"
            name="name"
            value={mailForm.name}
            onChange={editInput}
          />
        </div>
        <div className="my-3">
          <label htmlFor="forEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="forEmail"
            name="email"
            value={mailForm.email}
            onChange={editInput}
          />
        </div>
        <div className="my-3">
          <label htmlFor="forSubject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="forNames"
            name="subject"
            value={mailForm.subject}
            onChange={editInput}
          />
        </div>
        <div className="my-3">
          <label htmlFor="forMessage" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="forMessage"
            name="message"
            value={mailForm.message}
            rows="8"
            style={{ resize: "none" }}
            onChange={editInput}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn text-white fw-bold mx-4"
            style={{ backgroundColor: "#1a2d4b" }}
          >
            Send
          </button>
          <button
            type="button"
            className="btn text-white fw-bold mx-4"
            style={{ backgroundColor: "#1a2d4b" }}
            onClick={resetMailForm}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact_SendEmail;
