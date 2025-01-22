import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footercontent">
          <div className="footercontenttitle">
            <h2>G1UNI</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              quia officia mollitia voluptates in, perspiciatis minima illum
              quae perferendis animi eveniet sapiente architecto, consequatur
              veritatis expedita recusandae laudantium amet delectus!
            </p>
          </div>
          <ul className="footercompany">
            <h3>Company</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
          <ul className="footerclass">
            <h3>Class</h3>
            <li>ui/ux</li>
            <li>Development</li>
            <li>Logo Design</li>
            <li>Branding</li>
          </ul>
          <ul className="footercontact">
            <h3>Contact</h3>
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>Tutoaria</li>
            <li>How to write a contact</li>
          </ul>
        </div>
        <div className="footerdetails">
          <h4>2024-Copyright, All right Reserved</h4>
          <h4>Developed By Group 01 CS</h4>
        </div>
      </section>
    </div>
  );
};

export default Footer;
