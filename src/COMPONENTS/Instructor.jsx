import React from "react";
import "./style.css";

const instructorsData = [
  {
    name: "Mr. Boniphace",
    role: "UI Designer",
    image: "images/lecture1.jpeg",
  },
  {
    name: "Ms. Floriana",
    role: "Digital Marketer",
    image: "images/lecture3.jpg",
  },
  {
    name: "Mr. Gadiel",
    role: "Lead Developer",
    image: "images/lecture2.jpeg",
  },
  {
    name: "Mr. David",
    role: "Developer",
    image: "images/lecture4.jpeg",
  },
];

const Instructor = () => {
  return (
    <div>
      <section className="instructorssection">
        <h2 className="instructorstitle">Expert Instructors</h2>
        <p className="instructorsdescription">
          Engage with dynamic courses taught by industry experts, tailored to
          your interests and goals. <br /> Access resources anytime, anywhere,
          and join a vibrant community of learners. Elevate your skills and
          knowledge.
        </p>
        <div className="instructorsgrid">
          {instructorsData.map((instructor, index) => (
            <div key={index} className="instructorcard">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="instructorimage"
              />
              <div className="instructorcardcontent">
                <h3 className="instructorname">{instructor.name}</h3>
                <p className="instructorrole">{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Instructor;
