import React from "react";
import { MdElectricBolt } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="kontener mx-auto md:flex md:flex-col md:items-center"
      >
        <div className="  flex gap-2.5 bg-white-99 items-center p-3.5 rounded-md lp:py-3 lp:px-6">
          <div className="bg-primary-95 p-3 flex items-center w-12 h-12">
            <MdElectricBolt className="w-6 h-6" />
          </div>
          <p className="font-semibold text-[16px] md:text-3xl lp:text-4xl lp:leading-[54px] 2xl:text-5xl 2xl:leading-[72px] ">
            <span className="text-primary-50">Unlock</span> Your Creative
            Potential
          </p>
        </div>
        <div className="px-[30px] text-center mt-4">
          <p className=" leading-9 font-medium md:text-[28px] md:leading-10.5 lp:text-[38px]">
            with Online Design and Development Courses.
          </p>
          <p className=" font-normal text-sm md:text-[16px] md:leading-6">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <div className="flex gap-2 text-normal justify-center mt-[50px] md:gap-3">
          <button className="bg-primary-50 py-3.5 px-5 text-white rounded-md">
            Explore Courses
          </button>
          <button className="bg-white py-3.5 px-5 text-black rounded-md">
            View Pricing
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
