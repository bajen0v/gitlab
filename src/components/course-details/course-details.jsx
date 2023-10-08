
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseArea from "./course-area";
import CourseDetailsArea from "./course-details-area";

const CourseDetails = ({course}) => {
  return (
    <>
      <Breadcrumb title={course.course_title} subtitle={course.title} isDbbl="Courses" />
      <CourseDetailsArea course={course}/>
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
