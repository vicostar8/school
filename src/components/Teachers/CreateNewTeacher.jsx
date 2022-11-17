import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import BirthDate from "./CreateNewTeacher_Components/BirthDate";
import Names from "./CreateNewTeacher_Components/Names";
import Other from "./CreateNewTeacher_Components/Other";
import Buttons_Sections from "./CreateNewTeacher_Components/Buttons_Section";

import {
  generateDays,
  generateMonths,
  generateYears,
} from "../../utils/generateBirthDate_Values";
import { validateTeachersForm } from "../../validators/teachersValidator";
import { generateURLPicture } from "../../utils/generateURLPicture";

class CreateNewTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      gender: "",
      birthDate: { day: 1, month: 1, year: 2022 },
      profilePicture: "",
      specialization: this.props.subjectCreateNewTeacher || "",
      isClassMaster: { value: false, ofClass: { number: 0, char: "" } },
    };

    this.classToDo = "";

    this.changeBirthDate = this.changeBirthDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCM = this.handleChangeCM.bind(this);
    this.handleChangeClass = this.handleChangeClass.bind(this);
    this.handleChangeLetter = this.handleChangeLetter.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
    this.handleCreateNewTeacher = this.handleCreateNewTeacher.bind(this);
  }

  //   for BIRHTDATE
  changeBirthDate(e) {
    this.setState({
      birthDate: {
        ...this.state.birthDate,
        [e.target.name]: parseInt(e.target.value),
      },
    });
  }

  //   for NAMES / SPEICIALIZATION / GENDER / isPrincipal
  handleChange(e) {
    if (e.target.name === "gender") {
      const profilePicture = generateURLPicture(e.target.value);
      this.setState({ [e.target.name]: e.target.value, profilePicture });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleChangeClass(e) {
    this.setState({
      isClassMaster: {
        ...this.state.isClassMaster,
        ofClass: {
          ...this.state.isClassMaster.ofClass,
          [e.target.name]: parseInt(e.target.value),
        },
      },
    });
  }

  handleChangeLetter(e) {
    this.setState({
      isClassMaster: {
        ...this.state.isClassMaster,
        ofClass: {
          ...this.state.isClassMaster.ofClass,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  handleChangeCM(e) {
    let val = false;
    if (e.target.value === "yes") val = true;

    this.setState({
      isClassMaster: {
        ...this.state.isClassMaster,
        [e.target.name]: val,
        ofClass: { number: 0, char: "" },
      },
    });
  }

  async componentDidUpdate(pP, pS) {
    if (
      pS.isClassMaster.value !== this.state.isClassMaster.value ||
      pS.isClassMaster.ofClass.number !==
        this.state.isClassMaster.ofClass.number ||
      pS.isClassMaster.ofClass.char !== this.state.isClassMaster.ofClass.char
    ) {
      if (this.state.isClassMaster.value) {
        if (
          this.state.isClassMaster.ofClass.number !== 0 &&
          this.state.isClassMaster.ofClass.char !== ""
        ) {
          const cN = this.state.isClassMaster.ofClass.number;
          const cL = this.state.isClassMaster.ofClass.char;
          const { data } = await axios.get(
            `http://localhost:4000/api/teachers/${cN}/${cL}`
          );
          if (data !== "") {
            alert(
              `Class master of ${cN} ${cL} is ${data.firstName} ${data.lastName}. Choose another class!`
            );
            this.setState({
              isClassMaster: {
                ...this.state.isClassMaster,
                ofClass: {
                  ...this.state.isClassMaster.ofClass,
                  number: 0,
                  char: "",
                },
              },
            });
          }
        }
      }
    }
  }

  handleResetForm(e) {
    e.preventDefault();
    this.setState({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      gender: "",
      profilePicture: "",
      birthDate: { day: 1, month: 1, year: 2022 },
      specialization: this.props.subjectCreateNewTeacher || "",
      isClassMaster: { value: false, ofClass: { number: 0, char: "" } },
    });
  }

  handleCreateNewTeacher(e) {
    e.preventDefault();

    const valid = validateTeachersForm(this.state);
    if (valid) {
      this.props.submitNewTeacher(this.state);
    }
  }

  render() {
    const { month, year } = this.state.birthDate;
    const { firstName, lastName, gender, specialization, isClassMaster } =
      this.state;

    const months = generateMonths();
    const years = generateYears();
    const days = generateDays(month, year);

    return (
      <div
        className="cotainer-fluid m-4 p-4 fw-bold"
        style={{ backgroundColor: "#8599b4" }}
      >
        <h1 className="mb-4">Add new teacher</h1>
        <form>
          <Names
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            handleChange={this.handleChange}
          />
          {/* BIRTH DATE */}
          <BirthDate
            days={days}
            months={months}
            years={years}
            changeBirthDate={this.changeBirthDate}
          />
          <Other
            specialization={specialization}
            isClassMaster={isClassMaster}
            handleChange={this.handleChange}
            handleChangeCM={this.handleChangeCM}
            handleChangeClass={this.handleChangeClass}
            handleChangeLetter={this.handleChangeLetter}
          />
          <Buttons_Sections
            handleResetForm={this.handleResetForm}
            handleCreateNewTeacher={this.handleCreateNewTeacher}
          />
        </form>
      </div>
    );
  }
}

export default CreateNewTeacher;
