import React from "react";
import "./style.css";

function Banner() {
  return (
    <div>
      <div className="bannercard">
        <h1>
          Are you ready to start <br />
          your course now!
        </h1>
        <div className="buttons">
          <button>Lets Get Started</button>
          <button className="contactbutton">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
