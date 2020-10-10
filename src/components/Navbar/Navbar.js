import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { toggleMenu } from "../../store/actions/menu";
import { expensesAddFormModaltoggle } from "../../store/actions/modals";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="h-8 w-8 flex items-center justify-center">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="h-6 w-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
            <path d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
          </svg>
        </Link>

        <div
          className="h-8 w-8 flex items-center justify-center"
          onClick={() => {
            dispatch(expensesAddFormModaltoggle());
          }}
        >
          <svg
            className="h-6 w-6"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>

        <div
          className="h-8 w-8 flex items-center justify-center"
          onClick={() => dispatch(toggleMenu())}
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="h-6 w-6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
