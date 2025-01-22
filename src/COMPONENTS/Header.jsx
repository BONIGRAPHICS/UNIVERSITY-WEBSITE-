import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="mainheader">
      <div className="leftDiv">
        <h2> Better Place to find education for Learning Anywhere</h2>
        <p>
          We provide Online learning that is convinient and flexible. it allows
          you to <br />
          study from Anywhere through platforms and at our Campus.
        </p>
        <button>Get Started</button>
        <div className="numbers">
          <div className="numbercard">
            <h1>70k+</h1>
            <p>Happy Student</p>
          </div>
          <div className="numbercard">
            <h1>65k+</h1>
            <p>Active Student</p>
          </div>
          <div className="numbercard">
            <h1>8k+</h1>
            <p>Online Class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
