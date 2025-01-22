let courses = [
  {
    id: 1,
    courseName: "Web Development",
    instructorName: "Floriana",
    instructorImage: "images/lecture3.jpg",
    courseImage: "images/corse.jpg",
    members: "200k",
  },

  {
    id: 2,
    courseName: "App Development",
    instructorName: "Floriana",
    instructorImage: "images/lecture3.jpg",
    courseImage: "images/corse.jpg",
    members: "700k",
  },

  {
    id: 3,
    courseName: "Ethical Hacking",
    instructorName: "David Akyoo",
    instructorImage: "images/lecture3.jpg",
    courseImage: "images/corse.jpg",
    members: "400k",
  },
];

export const getCourses = () => courses;
export const addCourse = (newCourse) => {
  courses = [...courses, { ...newCourse, id: courses.leght + 1 }];
};

export default { getCourses, addCourse };
