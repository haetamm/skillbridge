import React from "react";
import { dataDetailCourses } from "../../../utils/data";
import { Link } from "react-router-dom";
import { urlPage } from "../../../utils/constans";
import { scrollTop } from "../../../utils/helper";

const CardDetailCourse = () => {
  return (
    <>
      {dataDetailCourses.map(
        (
          { title, preview, img, duration, label, author, curricullums, slug },
          index
        ) => (
          <div
            key={index}
            className="mx-auto kontener my-10 bg-white rounded-lg mb-0"
          >
            <div className="w-full p-6 xl:p-10 lp:p-10 lp:gap-10 dk:p-12.5">
              <div className=" md:flex md:justify-between items-center space-y-3 md:space-y-0 gap-12.5 md:items-center ">
                <div className="w-full  space-y-2  md:items-center xl:w-[1031px]">
                  <p className="w-full font-semibold text-[18px] leading-[27px] md:text-[20px] md:leading-7.5">
                    {title}
                  </p>
                  <p className="xl:text-[16px] leading-6">{preview}</p>
                </div>
                <Link
                  to={`${urlPage.COURSE}/${slug}`}
                  onClick={scrollTop}
                  className="flex-shrink-0"
                >
                  <button className="cursor-pointer px-4 py-3.5 rounded-md border-[1px] bg-white-99 border-white-95  xl:font-medium  lp:h-[49px] lp:py-3.5 lp:px-4 dk:h-[63px] dk:py-4.5 dk:px-6 ">
                    View Course
                  </button>
                </Link>
              </div>
              <div className="w-full grid justify-center grid-cols-3 gap-2.5 mt-6  md:gap-2.5 xl:gap-12 lp:gap-5 dk:gap-7.5">
                {img.map((image, index) => (
                  <img
                    key={index}
                    src={`/img/${image}`}
                    alt={`img-detail-${index}`}
                    className="kontener h-25 object-cover rounded-md xs:h-[186px] md:h-[239px] lg:h-[322px] lp:h-[326px] dk:h-[422px] "
                  />
                ))}
              </div>
              <div className="w-full xs:flex xs:justify-between xs:items-center mt-6">
                <div className="w-full flex gap-2 items-center">
                  <button className="flex-shrink-0 h-8.4 border-[1px] border-white-95 rounded-md bg-white py-2 px-3 p:h-9 dk:h-[43px] dk:py-2.5 dk:px-4">
                    {duration}
                  </button>
                  <button className="flex-shrink-0 h-8.4 border-[1px] border-white-95 rounded-md bg-white py-2 px-3  lp:h-9 dk:h-[43px] dk:py-2.5 dk:px-4">
                    {label}
                  </button>
                </div>
                <p className="w-full xs:text-end font-medium text-[16px] leading-5 font-grey-15 mt-3  xs:mt-0 lp:text-[18px] lp:leading-5.5 dk:text-xl dk:leading-6.5">
                  By {author}
                </p>
              </div>
              <div className="mt-6 rounded-[10px] border-[1px] border-white-95 ">
                <p className="py-3.5 px-2.5 border-b-[1px] font-semibold leading-6 text-grey-15 text-[16px] xl:py-5 xl:px-6 lp:text-[18px] lp:leading-[27px] dk:py-6 dk:px-7.5 dk:text-[22px] dk:leading-[33px]">
                  Curriculum
                </p>
                <div className="p-6 gap-5 lg:flex lg:items-center lg:gap-2 lg:py-6 xl:py-6 xl:gap-4 xl:px-10 lp:py-6 lp:px-10 lp:gap-10 lp:items-start lp:h-[160px] dk:h-[166px] dk:gap-12.5">
                  {curricullums.map(({ id, title }, index) => (
                    <div
                      key={index}
                      className={`lg:border-b-0  lg:w-[204px] lg:h-[120px] lg:px-3 lg:py-0 xl:w-[220px] xl:h-[120px] xl:py-0 lp:w-[220px] dk:min-w-[280px]
                          ${
                            index === 0
                              ? "pb-6"
                              : index === curricullums.length - 1
                              ? "pt-6"
                              : "py-6"
                          } 
                          ${
                            index !== curricullums.length - 1
                              ? "border-b-[1px] lg:border-r-[1px]"
                              : ""
                          }
                      `}
                    >
                      <p className="text-3xl font-extrabold leading-[45px] xl:text-[40px] dk:text-[50px] dk:leading-[75px]">
                        {id}
                      </p>
                      <p className="xl:text-[16px] xl:leading-[24px] dk:text-[18px] dk:leading-[27px]">
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CardDetailCourse;
