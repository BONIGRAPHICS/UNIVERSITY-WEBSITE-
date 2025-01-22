import React, { useState } from "react";
import "./style.css";

const testimonials = [
  {
    name: "Chapa Kalwinzi",
    role: "Student",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisi egestas vivamus fermentum gravida. Lorem neque mattis nulla adipiscing laoreet, Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit. Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit.",
    image: "images/lecture1.jpeg",
  },
  {
    name: "Samsoni Samwel",
    role: "Student",
    message:
      "Orci aliquam adipiscing feugiat potenti cursus faucibus iaculis blandit. Ultrices et facilisi pellentesque vel, Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit, Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit.",
    image: "images/lecture4.jpeg",
  },
  {
    name: "Alexandro",
    role: "Student",
    message:
      "Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit, Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit, Ultrices et facilisi pellentesque vel, quis adipiscing feugiat potenti cursus faucibus iaculis blandit. ",
    image: "images/lecture2.jpeg",
  },
];

const StudentTestimonial = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          <h2>
            What Our Student <br />
            Saying
          </h2>
          <p>{testimonials[index].message}</p>
          <div className="titlenavigation">
            <div className="title">
              <h4>{testimonials[index].name}</h4>
              <p>{testimonials[index].role}</p>
            </div>
            <div className="navigation">
              <span className="icon" onClick={handlePrev}>
                ←
              </span>
              <span className="icon" onClick={handleNext}>
                →
              </span>
            </div>
          </div>
        </div>
        <div className="testimonial-image">
          <img src={testimonials[index].image} alt={testimonials[index].name} />
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonial;
