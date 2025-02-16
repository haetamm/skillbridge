import React from "react";
import ListQuestion from "./ListQuestion";
import "../styles/card-faq.css";

const CardFaq = () => {
  return (
    <>
      <div className="kontener mt-10 p-card-faq bg-white  mx-auto rounded-xl ">
        <div className=" space-y-10 flex flex-col lg:space-y-0 lg:flex-row gap-card-faq lp:space-y-7.5">
          <div className="w-full lp:w-[408px] dk:min-w-[408px] space-y-5 lp:space-y-10 dk:space-y-12.5">
            <div className="lp:space-y-2">
              <p className="text-[28px] leading-[33px] lp:text-[38px] lp:leading-[45px] lp:font-semibold dk:text-5xl dk:leading-[57px]">
                Frequently Asked Questions
              </p>
              <p className="text-body">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
            </div>
            <button className=" py-3.5 px-5 rounded-md border-[1px] border-white-95 font-medium flex-shrink-0 dk:py-4.5 dk:px-6 dk:rounded-lg dk:text-lg dk:leading-[27px]">
              See All FAQ’s
            </button>
          </div>

          <ListQuestion />
        </div>
      </div>
    </>
  );
};

export default CardFaq;
