import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import ListCard from "../components/pages/about/ListCard";
import { dataAchivments, dataGoals } from "../utils/data";
import CardSectionAbout from "../components/pages/about/CardSectionAbout";

const AboutPage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4">
        <DescriptionCard
          title="About Skillbridge"
          classList="md:items-center"
          desc="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        />
        <CardSectionAbout
          title="Achievements"
          description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
        >
          <ListCard data={dataAchivments} />
        </CardSectionAbout>

        <CardSectionAbout
          title="Our Goals"
          description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"
        >
          <ListCard data={dataGoals} />
        </CardSectionAbout>
      </div>
    </>
  );
};

export default AboutPage;
