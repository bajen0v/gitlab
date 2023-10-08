import React from "react";
import AboutArea from "./about-area";
import CategoryArea from "./category-area";
import ChooseArea from "./choose-area";
import CounterArea from "@/src/common/counter-area";
import CourseArea from "./course-area";
import FeatureArea from "./feature-area";
import HeroBanner from "./hero-banner";
import InstructorArea from "@/src/common/instructor-area";
import SuitableArea from "@/src/common/suitable-area";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import BrandArea from "@/src/common/brand-area";

const Home = ({courses}) => {
  return (
    <>
      <HeroBanner />
      <FeatureArea />
      <AboutArea />
      <CategoryArea />
      <CourseArea courses={courses}/>
      <ChooseArea />
      <CounterArea />
      <InstructorArea />
      <SuitableArea />
      <TestimonialArea />
      <BlogArea />
      <BrandArea style_1={true} />
    </>
  );
};

export default Home;
