import React from "react";
import "./style.css";

const Features = () => {
  return (
    <div>
      <section className="features">
        <div className="features-header">
          <h2>Our Features Special For You</h2>
          <p>As your achievement, look within yourself!</p>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div class="icon" style={{ background: "#FF76C1" }}>
              &#10003;
            </div>
            <h3>CCampus Life</h3>
            <p>
              A vibrant student life with clubs, organizations, sports, events,
              and recreational activities to foster a sense of community.
            </p>
          </div>
          <div className="feature-item">
            <div class="icon" style={{ background: "#58D68D" }}>
              &#10003;
            </div>
            <h3>Technology Integration</h3>
            <p>
              Access to the latest technological tools and online learning
              platforms that support innovative and flexible learning
              experiences.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon" style={{ background: "#5DADE2" }}>
              &#10003;
            </div>
            <h3>Research Opportunities</h3>
            <p>
              Access to cutting-edge research projects, labs, and resources,
              allowing students and faculty to innovate and explore new ideas.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon" style={{ background: "#AF7AC5" }}>
              &#10003;
            </div>
            <h3>Student Support Services</h3>
            <p>
              Counseling, academic advising, tutoring, health services, and
              disability support to ensure student well-being.
            </p>
          </div>
          <div className="feature-item">
            <div class="icon" style={{ background: "#FF76C1" }}>
              &#10003;
            </div>
            <h3>Course Accessibility</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              sit ut nisl.
            </p>
          </div>
          <div className="feature-item">
            <div class="icon" style={{ background: "#58D68D" }}>
              &#10003;
            </div>
            <h3>Global Perspective</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              sit ut nisl.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon" style={{ background: "#5DADE2" }}>
              &#10003;
            </div>
            <h3>Career Services</h3>
            <p>
              Job placement assistance, internships, career counseling, and
              networking opportunities to help students transition into the
              workforce.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
