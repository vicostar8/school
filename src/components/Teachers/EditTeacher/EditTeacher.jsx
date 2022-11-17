import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import EditTeacher_Names from "./EditTeacher_Names";
import EditTeacher_BirthDate from "./EditTeacher_BirthDate";
import EditTeacher_Other from "./EditTeacher_Other";
import EditTeacher_ButtonsSection from "./EditTeacher_ButtonsSection";
import Loading from "../../common/Loading";

import {
  generateDays,
  generateMonths,
  generateYears,
} from "../../../utils/generateBirthDate_Values";
import { validateTeachersForm } from "../../../validators/teachersValidator";
import { teacherBlueprint } from "./../../../blueprints/teacherBlueprint";

const EditTeacher = ({ subjects, editTeacherSubmit }) => {
  const { teacherID } = useParams();
  const [teacher, setTeacher] = useState(teacherBlueprint);
  const navigate = useNavigate();

  let days = generateDays(1, 2022);
  const months = generateMonths();
  const years = generateYears();

  let month = Object.keys(teacher).length === 0 ? 1 : teacher.birthDate.month;
  let year = Object.keys(teacher).length === 0 ? 1 : teacher.birthDate.year;
  if (Object.keys(teacher).length > 0) {
    days = generateDays(month, year);
  }

  useEffect(() => {
    async function getTeacher() {
      const { data } = await axios.get(
        `http://localhost:4000/api/teachers/${teacherID}`
      );
      setTeacher(data);
    }
    getTeacher();
  }, []);

  const editTeacher = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const editTeacherBD = (e) => {
    setTeacher({
      ...teacher,
      birthDate: {
        ...teacher.birthDate,
        [e.target.name]: parseInt(e.target.value),
      },
    });
  };

  const editTeacherCM = (e) => {
    let val = false;
    if (e.target.value === "yes") val = true;

    setTeacher({
      ...teacher,
      isClassMaster: {
        ...teacher.isClassMaster,
        [e.target.name]: val,
        ofClass: { number: 0, char: "" },
      },
    });
  };

  const editTeacherCM_Class = (e) => {
    setTeacher({
      ...teacher,
      isClassMaster: {
        ...teacher.isClassMaster,
        ofClass: {
          ...teacher.isClassMaster.ofClass,
          [e.target.name]: parseInt(e.target.value),
        },
      },
    });
  };

  const editTeacherCM_Letter = (e) => {
    setTeacher({
      ...teacher,
      isClassMaster: {
        ...teacher.isClassMaster,
        ofClass: {
          ...teacher.isClassMaster.ofClass,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  useEffect(async () => {
    if (teacher.isClassMaster.value) {
      if (
        teacher.isClassMaster.ofClass.number !== 0 &&
        teacher.isClassMaster.ofClass.char !== ""
      ) {
        const cN = teacher.isClassMaster.ofClass.number;
        const cL = teacher.isClassMaster.ofClass.char;
        const { data } = await axios.get(
          `http://localhost:4000/api/teachers/${cN}/${cL}`
        );

        if (data !== "") {
          if (
            data.firstName === teacher.firstName &&
            data.lastName === teacher.lastName
          ) {
            alert(
              `${data.firstName} ${data.lastName} is the current master of this class!`
            );
          } else {
            alert(
              `${data.firstName} ${data.lastName} is the class master of ${cN} ${cL}`
            );
            setTeacher({
              ...teacher,
              isClassMaster: {
                ...teacher.isClassMaster,
                ofClass: {
                  number: 0,
                  char: "",
                },
              },
            });
          }
        }
        // if (data === "") console.log("EMPTY");
      }
    }
  }, [
    teacher.isClassMaster.value,
    teacher.isClassMaster.ofClass.number,
    teacher.isClassMaster.ofClass.char,
  ]);

  const editTeacherRST = (e) => {
    e.preventDefault();
    setTeacher({
      ...teacher,
      firstName: "",
      lastName: "",
      birthDate: { day: 1, month: 1, year: 2022 },
      specialization: "",
      isClassMaster: { value: false, ofClass: { number: 0, char: "" } },
    });
  };

  const editTeacherSub = (e) => {
    e.preventDefault();

    const valid = validateTeachersForm(teacher);
    if (valid) {
      editTeacherSubmit(teacher);
      setTimeout(() => navigate("/teachers"), 200);
    }
  };

  return (
    <React.Fragment>
      {Object.keys(teacher).length === 0 && <Loading />}
      {Object.keys(teacher).length > 0 && (
        <div
          className="cotainer-fluid m-5 p-4 fw-bold"
          style={{ backgroundColor: "#8599b4" }}
        >
          <h1 className="mb-4">Edit teacher</h1>
          <form>
            <EditTeacher_Names teacher={teacher} editTeacher={editTeacher} />
            <EditTeacher_BirthDate
              days={days}
              months={months}
              years={years}
              teacher={teacher}
              editTeacherBD={editTeacherBD}
            />
            <EditTeacher_Other
              subjects={subjects}
              teacher={teacher}
              editTeacher={editTeacher}
              editTeacherCM={editTeacherCM}
              editTeacherCM_Class={editTeacherCM_Class}
              editTeacherCM_Letter={editTeacherCM_Letter}
            />
            <EditTeacher_ButtonsSection
              editTeacherSub={editTeacherSub}
              editTeacherRST={editTeacherRST}
            />
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditTeacher;
