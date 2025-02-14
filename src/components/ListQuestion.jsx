import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { dataQuestions } from "../utils/data";

const ListQuestion = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleActive = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <>
      <div className="w-full space-y-5 lp:w-[631px] dk:w-[867px]">
        {dataQuestions.map(({ title, desc, subTitle }, index) => (
          <div
            key={index}
            className="rounded-[10px] border-[1px] border-white-95 space-y-5 py-5 px-6 lg:mt-0 lp:p-10 lp:space-y-7.5 dk:p-12.5 dk:space-y-12.5"
          >
            <div className="flex justify-between space-x-7.5 items-center">
              <p className="text-[16px] font-medium leading-[24px] lp:text-lg lp:leading-[27px] dk:text-xl dk:leading-7.5">
                {title}
              </p>
              <button
                onClick={() => toggleActive(index)}
                className="cursor-pointer bg-primary-95 p-2.5 rounded-md lp:h-11 lp:w-11 dk:h-[52px] dk:w-[52px]"
              >
                <GoPlus
                  className={`w-5 h-5 transition-transform duration-300 lp:w-6 lp:h-6 dk:h-7 dk:w-7 ${
                    activeQuestion === index ? "transform rotate-45" : ""
                  }`}
                />
              </button>
            </div>

            {activeQuestion === index && (
              <div className="border-t-[1px] border-white-95">
                <p className="text-grey-30 my-5 lp:my-7.5 lp:text-[16px] lp:leading-6 dk:my-12.5 dk:text-lg dk:leading-[27px]">
                  {desc}
                </p>
                <div className="bg-white-95 py-3 px-5 rounded-md lp:py-[16px] lp:px-6 dk:py-5 dk:px-7.5">
                  <div className="flex justify-between items-center">
                    <p className="font-medium lp:text-[16px] lp:leading-6 dk:text-lg dk:leading-[27px]">
                      {subTitle}
                    </p>
                    <button className="flex justify-center items-center flex-shrink-0 p-2.5 h-10 w-10 rounded-full bg-white lp:h-[48px] lp:w-[48px] dk:w-14 dk:h-14">
                      <FaArrowRight className="w-5 h-5 lp:h-6 lp:w-6 dk:w-7 dk:h-7" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default ListQuestion;
