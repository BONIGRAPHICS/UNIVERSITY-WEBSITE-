import React, { useEffect, useState } from "react";
import "./style.css";

const Popular = () => {
  const [post, setPost] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseImage: "",
    courseName: "",
    instructorImage: "",
    instructorName: "",
    members: "",
  });

  useEffect(() => {
    fetch("./db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setPost(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleAddCourse = () => {
    setPost([...post, newCourse]);
    setNewCourse({
      courseImage: "",
      courseName: "",
      instructorImage: "",
      instructorName: "",
      members: "",
    });
    setIsPopupOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="popular">
      <h1>Our Popular Courses</h1>
      <button className="add-course-btn" onClick={() => setIsPopupOpen(true)}>
        Add Course
      </button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add New Course</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCourse();
              }}
            >
              <input
                type="text"
                name="courseImage"
                placeholder="Course Image URL"
                value={newCourse.courseImage}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="courseName"
                placeholder="Course Name"
                value={newCourse.courseName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="instructorImage"
                placeholder="Instructor Image URL"
                value={newCourse.instructorImage}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="instructorName"
                placeholder="Instructor Name"
                value={newCourse.instructorName}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="members"
                placeholder="Number of Members"
                value={newCourse.members}
                onChange={handleInputChange}
                required
              />
              <div className="popupdownbutton">
                <button type="submit">Add Course</button>
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)}
                  className="cancelbutton"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="popularcads">
        {post.map((postCourse, i) => (
          <div className="popularcard" key={i}>
            <img src={postCourse.courseImage} alt="" />
            <div className="coursecontent">
              <h3>{postCourse.courseName}</h3>
              <div className="courseinstructor">
                <div className="courseInstractorImagess">
                  <img src={postCourse.instructorImage} alt="" />
                </div>
                <h4>{postCourse.instructorName}</h4>
              </div>
              <div className="coursedetails">
                <button>Read More</button>
                <h2>{postCourse.members} Members</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
