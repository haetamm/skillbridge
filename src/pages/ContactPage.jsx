import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import FormContact from "../components/pages/contact/FormContact";
import InfoContact from "../components/pages/contact/InfoContact";
import "../styles/contact-page.css";

const ContactPage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 mb-0 xl:mb-[50px]">
        <DescriptionCard
          title="Contact Us"
          classList="md:items-center"
          desc="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />

        <div className="kontener mx-auto ">
          <div className="bg-white rounded-xl contact-container">
            <FormContact />

            <InfoContact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
