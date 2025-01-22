import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <h6>G1UNI</h6>
        <ul>
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="navlink">
              Courses
            </Link>{" "}
          </li>
          <li>
            <Link to="/About" className="navlink">
              About Us
            </Link>
          </li>
        </ul>
        <div className="navbuttons">
          <button className="button1">Log in</button>
          <button className="button2">Post Course</button>
        </div>
        <div className="navicon">=</div>
      </nav>
    </div>
  );
};

export default Navbar;
