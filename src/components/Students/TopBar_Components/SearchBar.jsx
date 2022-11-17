import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({
  updateStudentList,
  setPerPage,
  howManyPerPage,
  resetCurrentPage,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [students, setStudents] = useState([]);

  const changeSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput !== "") {
      async function getStudents() {
        const { data } = await axios.get(
          `http://localhost:4000/api/searchStudents/${searchInput}`
        );
        if (data.length !== 0) {
          setStudents(data);
        }
        if (data.length === 0) setStudents([]);
      }
      getStudents();
    }

    if (searchInput === "") {
      async function getStudents() {
        const { data } = await axios.get(`http://localhost:4000/api/students`);
        setStudents(data);
      }
      getStudents();
    }
  }, [searchInput]);

  useEffect(() => {
    setTimeout(() => {
      updateStudentList(students);
      resetCurrentPage();
    }, 100);
  }, [students]);

  const changePerPage = (e) => {
    setPerPage(e.target.value);
  };

  return (
    <div className="col-sm d-flex" style={{ width: "100%" }}>
      <form className="d-flex justify-content-center justify-content-md-start m-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by last name"
          name="search"
          aria-label="Search"
          style={{ width: "200px" }}
          onChange={changeSearch}
        />
      </form>
      <form className="d-flex justify-content-center justify-content-md-start m-2">
        <select
          className="form-select"
          aria-label="Default select example"
          name="perPage"
          value={howManyPerPage}
          onChange={changePerPage}
        >
          <option value={5}>{"5 per page"}</option>
          <option value={10}>{"10 per page"}</option>
          <option value={20}>{"20 per page"}</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
