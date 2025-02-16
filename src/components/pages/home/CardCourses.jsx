import React from "react";
import { dataCourses } from "../../../utils/data";

const CardCourses = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2 dk:gap-7.5">
        {dataCourses.map(
          ({ title, img, duration, desc, label, author }, index) => (
            <section
              id="course-card"
              key={index}
              className="bg-white space-y-6 p-6 rounded-[10px] flex flex-col items-center md:p-7.5 xl:p-10 lp:justify-between dk:rounded-xl dk:p-12.5 dk:space-y-7.5"
            >
              <img
                src={`/img/${img}`}
                alt="img-coursus"
                className="object-cover rounded-lg w-[309px] h-[172px] xs:w-[600px] xs:h-[333px] md:w-[768px] md:h-[377px]  lg:w-[549px] lg:h-[266px] lp:h-[266px] dk:min-w-[683px] dk:min-h-[380px]"
              />
              <div className="w-full space-y-4 inline-block items-center xs:flex xs:justify-between md:space-y-0 dk:space-y-3">
                <div className="flex space-x-2.5 items-center">
                  <div className="py-2 px-3.5 rounded-md border-white-95 border-[1px] dk:py-2.5 dk:px-4 dk:rounded-lg">
                    <p className="leading-[17px] dk:text-[18px] dk:leading-[22px]">
                      {duration}
                    </p>
                  </div>
                  <div className="py-2 px-3.5 rounded-md border-white-95 border-[1px] dk:py-2.5 dk:px-4 dk:rounded-lg">
                    <p className="leading-[17px] dk:text-[18px] dk:leading-[22px]">
                      {label}
                    </p>
                  </div>
                </div>
                <p className="text-[16px] font-medium leading-5 dk:text-xl dk:leading-[25px]">
                  By {author}
                </p>
              </div>
              <div className="w-full space-y-2.5 dk:space-y-3.5">
                <p className="font-semibold text-title-card">{title}</p>
                <p className="text-grey-30 text-body">{desc}</p>
              </div>
              <button className="cursor-pointer w-full py-3.5 px-6 bg-white-97 rounded-md font-medium dk:py-4.5 dk:px-6 dk:rounded-lg dk:text-lg dk:leading-[27px]">
                Get it Now
              </button>
            </section>
          )
        )}
      </section>
    </>
  );
};

export default CardCourses;
