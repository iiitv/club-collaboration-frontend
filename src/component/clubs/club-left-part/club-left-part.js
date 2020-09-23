import React from "react";
import "./club-left-part.css";
import { NavLink } from "react-router-dom";
const Clubleft = () => {
  return (
    <div className="club-left-part">
      <div className="top-left-div"></div>
      <img
        src="../images/bg-image/upper.jpg"
        className="upper-image"
        alt="bg"
      />
      <br />
      <button>
        <NavLink
          to="/SendRequest"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          Join Club
        </NavLink>
      </button>
      <br />
      <button>Members</button>
      <br />
      <img
        src="../images/bg-image/below.jpg"
        className="lower-image"
        alt="bg"
      />
    </div>
  );
};
export default Clubleft;
