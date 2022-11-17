import React from "react";
import _ from "lodash";

const Pagination = ({ pages, currentPage, updateCurrentPage }) => {
  return (
    <nav className="d-flex justify-content-center align-items-center">
      {pages.length > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={`${
                currentPage === page ? "page-item active" : "page-item"
              }`}
              onClick={() => updateCurrentPage(page)}
            >
              <a
                className="page-link fw-bold"
                href="#"
                style={{
                  backgroundColor: "#8599b4",
                  color: "#1a2d4b",
                  textDecoration: "none",
                }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
