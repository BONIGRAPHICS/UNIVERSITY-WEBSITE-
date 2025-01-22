import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Welcome to Our University</h1>
        <p>
          Hello! Welcome Group 01 Universty <strong>(G1UNI)</strong> Discover
          what drives us forward and defines our purpose. Explore our vision,
          mission, and core values that guide our institution.
        </p>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-icon">&#128065;</div>
          <h3>Our Vision</h3>
          <p>
            To be a leading institution that empowers students to shape the
            future with innovation, integrity, and knowledge.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">&#128640;</div>
          <h3>Our Mission</h3>
          <p>
            To provide high-quality education, foster research, and encourage
            community engagement that creates a positive impact on society.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icon">&#9878;</div>
          <h3>Our Core Values</h3>
          <p>
            Excellence, inclusivity, innovation, integrity, and respect for
            diversity are the pillars that define our university culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
