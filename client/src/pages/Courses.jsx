import React from "react";
import Course from "../components/Course";

const Courses = ({ courses }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {courses &&
          courses.map((curElem, id) => {
            return <Course key={curElem.id} {...curElem} />;
          })}
      </div>
    </div>
  );
};

export default Courses;
