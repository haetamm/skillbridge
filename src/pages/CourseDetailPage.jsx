import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import ImageCard from "../components/ImageCard";
import CardCurriculumDetail from "../components/pages/courseDetail/CardCurriculumDetail";
import { useParams } from "react-router-dom";
import { dataDetailCourses } from "../utils/data";
import DataNotFound from "../components/DataNotFound";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const result = dataDetailCourses.find((item) => item.slug === slug);

  if (!result) {
    return <DataNotFound />;
  }

  const { desc, title, curricullums } = result;

  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 ">
        <DescriptionCard
          title={`${title} Course`}
          classList="md:items-center"
          desc={desc}
        />
        <div className="flex justify-center">
          <ImageCard url="ui-ux-vid.png" />
        </div>
        <CardCurriculumDetail curricullums={curricullums} />
      </div>
    </>
  );
};

export default CourseDetailPage;
