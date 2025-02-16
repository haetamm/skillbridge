import React from "react";
import DescriptionCard from "../components/DescriptionCard";
import TogglePrice from "../components/TogglePrice";
import CardPricing from "../components/pages/home/CardPricing";
import CardFaq from "../components/CardFaq";

const PricePage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 mb-0 xl:mb-[50px]">
        <DescriptionCard
          title="Our Pricings"
          classList="md:items-center"
          desc="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
        <div className="space-y-10 kontener mx-auto">
          <TogglePrice />
          <CardPricing />
        </div>
        <div className="mt-12.5 lp:mt-25 dk:mt-[150px]">
          <CardFaq />
        </div>
      </div>
    </>
  );
};

export default PricePage;
