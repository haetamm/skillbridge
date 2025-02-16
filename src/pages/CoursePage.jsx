import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import CardDetailCourse from "../components/pages/course/CardDetailCourse";

const CoursePage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 mb-0 xl:mb-[50px]">
        <DescriptionCard
          title="Online Courses on Design and Development"
          classList="md:items-start"
          desc="Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey."
        />
        <CardDetailCourse />
      </div>
    </>
  );
};

export default CoursePage;
