import React from "react";
import Instructor from "./COMPONENTS/Instructor";
import StudentTestimonial from "./COMPONENTS/StudentTestimonial";
import Advantages from "./COMPONENTS/Advantages";
import Benefts from "./COMPONENTS/Benefts";
import Popular from "./COMPONENTS/Popular";
import Header from "./COMPONENTS/Header";
import Features from "./COMPONENTS/Features";
export default function Home() {
  return (
    <div>
      <Header />
      <Features />
      <Popular />
      <Advantages />
      <Benefts />
      <Instructor />
      <StudentTestimonial />
    </div>
  );
}
