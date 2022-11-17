import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import HomePage from "./components/HomePage/HomePage";
import MainMenu from "./components/MainMenu/MainMenu";
import Teachers from "./components/Teachers/Teachers";
import Students from "./components/Students/Students";
import Classes from "./components/ClassesCatalogues/Classes";
import Contact from "./components/Contact/Contact";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      subjectCreateNewTeacher: "",
      teachers: [],
      students: [],
      classes: [],
    };

    //SUBJECTS
    this.createNewSubject = this.createNewSubject.bind(this);
    this.handleSubjects = this.handleSubjects.bind(this);
    this.subjectForm = this.subjectForm.bind(this);

    // TEACHERS
    this.submitNewTeacher = this.submitNewTeacher.bind(this);
    this.fetchedTeachers = this.fetchedTeachers.bind(this);
    this.handleDeleteTeacher = this.handleDeleteTeacher.bind(this);
    this.editTeacherSubmit = this.editTeacherSubmit.bind(this);

    // STUDENTS
    this.createNewStudent = this.createNewStudent.bind(this);
    this.fetchedStudents = this.fetchedStudents.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);

    // ASBENCE ana GRADE
    this.editStudent = this.editStudent.bind(this);

    // SEARCH
    this.updateStudentList = this.updateStudentList.bind(this);

    // SCHOOL INFO
    this.newSchoolName = this.newSchoolName.bind(this);

    // CONTACT
    this.editSchoolInfo = this.editSchoolInfo.bind(this);
  }

  async createNewSubject(subject) {
    const subjectsClone = this.state.subjects;
    try {
      this.setState({ subjects: [...this.state.subjects, subject] });

      const result = await axios.post("http://localhost:4000/api/subjects", {
        name: subject,
      });

      if (result.data.error) throw new Error(`${result.data.error}`);
      else alert(`Subject ${subject} added to the database`);
    } catch (e) {
      this.setState({ subjects: subjectsClone });
      alert(e);
    }
  }

  handleSubjects(subjects) {
    this.setState({ subjects });
  }

  fetchedTeachers(teachers) {
    this.setState({ teachers });
  }

  subjectForm(subjectCreateNewTeacher) {
    this.setState({ subjectCreateNewTeacher });
  }

  async submitNewTeacher(newTeacher) {
    const teachersClone = this.state.teachers;
    try {
      this.setState({ teachers: [...this.state.teachers, newTeacher] });

      const { data } = await axios.post(
        "http://localhost:4000/api/teachers",
        newTeacher
      );

      if (data.error) throw new Error(`${data.error}`);
      else {
        alert("Teacher added to database.");
      }
    } catch (e) {
      this.setState({ teachers: teachersClone });
      alert(`Could not ADD the teacher - Reason: ${e}`);
    }
  }

  async handleDeleteTeacher(teacherToDelete) {
    const teachers = this.state.teachers;

    try {
      const newTeachers = teachers.filter((t) => t.id !== teacherToDelete);
      this.setState({ teachers: newTeachers });

      const { data } = await axios.delete(
        `http://localhost:4000/api/teachers/${teacherToDelete}`
      );
      alert(`Teacher deleted from DB! - ${data.firstName} ${data.lastName}`);
    } catch (e) {
      this.setState({ teachers });
      alert(`Could not DELETE the teacher - Reason: ${e}`);
    }
  }

  async editTeacherSubmit(editedTeacher) {
    const teachers = this.state.teachers;
    try {
      const newTeachers = teachers.map((t) => {
        if (t.id === editedTeacher.id) return editedTeacher;
        else return t;
      });
      this.setState({ teachers: newTeachers });

      // EDIT IN DB
      const { data } = await axios.put(
        `http://localhost:4000/api/teachers/${editedTeacher.id}`,
        editedTeacher
      );
    } catch (e) {
      this.setState({ teachers });
      alert(`Could not EDIT the teacher - Reason: ${e}`);
    }
  }

  // STUDENTS
  async createNewStudent(newStudent) {
    const studentsClone = this.state.students;
    try {
      this.setState({ students: [...this.state.students, newStudent] });

      const { data } = await axios.post(
        "http://localhost:4000/api/students",
        newStudent
      );

      if (data.error) throw new Error(`${data.error}`);
      else {
        alert("Student added to database.");
      }
    } catch (e) {
      this.setState({ students: studentsClone });
      alert(`Could not ADD the student - Reason: ${e}`);
    }
  }

  fetchedStudents(students) {
    this.setState({ students });
  }

  async deleteStudent(studentToDelete) {
    const students = this.state.students;

    try {
      const newStudents = students.filter((st) => st.id !== studentToDelete);
      this.setState({ students: newStudents });

      const { data } = await axios.delete(
        `http://localhost:4000/api/students/${studentToDelete}`
      );
      alert(`Student deleted from DB! - ${data.firstName} ${data.lastName}`);
    } catch (e) {
      this.setState({ students });
      alert(`Could not DELETE the student - Reason: ${e}`);
    }
  }

  async editStudent(editedStudent) {
    const students = this.state.students;

    try {
      const newStudents = students.map((s) => {
        if (s.id === editedStudent.id) return editedStudent;
        else return s;
      });
      this.setState({ students: newStudents });

      // EDIT IN DB
      const { data } = await axios.put(
        `http://localhost:4000/api/students/${editedStudent.id}`,
        editedStudent
      );
      alert(`Student ${data.firstName} ${data.lastName} has been edited!`);
    } catch (e) {
      this.setState({ students });
      alert(`Could not EDIT the student - Reason: ${e}`);
    }
  }

  // SEARCH
  updateStudentList(studentList) {
    this.setState({ students: studentList });
  }

  // SCHOOL INFO
  async newSchoolName(schoolName) {
    const { data } = await axios.put(`http://localhost:4000/api/schoolInfo`, {
      name: schoolName,
    });
    document.title = schoolName;
    alert(`School name has been edited to ${schoolName}!`);
  }

  // CONTACT
  async editSchoolInfo(info) {
    const { data } = await axios.put(`http://localhost:4000/api/contact`, info);
    alert(`School contact info edited`);
  }

  render() {
    const { subjects, teachers, students, subjectCreateNewTeacher } =
      this.state;

    return (
      <div className="App d-flex flex-column bg-light">
        {/* MAIN MENU */}
        <MainMenu />
        {/* CONTENT */}
        <Routes>
          <Route
            path="/"
            element={<HomePage newSchoolName={this.newSchoolName} />}
          />
          <Route
            path="/teachers/*"
            element={
              <Teachers
                subjects={subjects}
                teachers={teachers}
                subjectCreateNewTeacher={subjectCreateNewTeacher}
                createNewSubject={this.createNewSubject}
                fetchedSubjects={this.handleSubjects}
                fetchedTeachers={this.fetchedTeachers}
                subjectForm={this.subjectForm}
                submitNewTeacher={this.submitNewTeacher}
                handleDeleteTeacher={this.handleDeleteTeacher}
                editTeacherSubmit={this.editTeacherSubmit}
              />
            }
          />
          <Route
            path="/students/*"
            element={
              <Students
                students={students}
                createNewStudent={this.createNewStudent}
                fetchedStudents={this.fetchedStudents}
                deleteStudent={this.deleteStudent}
                addAbsence={this.editStudent}
                addGrade={this.editStudent}
                editedStudent={this.editStudent}
                updateStudentList={this.updateStudentList}
              />
            }
          />
          <Route path="/classes/*" element={<Classes />} />
          <Route
            path="/contact/*"
            element={<Contact editContactInfo={this.editSchoolInfo} />}
          />
          <Route path="/*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
