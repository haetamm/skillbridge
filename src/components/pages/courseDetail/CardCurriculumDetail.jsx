import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const CardCurriculumDetail = ({ curricullums }) => {
  return (
    <>
      <div className="kontener space-y-5 mt-12.5 mx-auto xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-7.5 lp:gap-5 dk:gap-10">
        {curricullums.map(({ id, title, details }, index) => (
          <div
            key={index}
            className=" bg-white p-7.5 rounded-[10px] xl:gap-10 xl:p-10 lp:p-10 lp:gap-10"
          >
            <p className="text-end text-[50px] font-bold lp:text-6xl lp:leading-[24px]">
              {id}
            </p>
            <p className="font-semibold text-[18px] leading-[27px] my-7.5 lp:text-xl lp:leading-[30px] ">
              {title}
            </p>

            <div className="space-y-4">
              {details.map(({ title, duration, label }, index) => (
                <div
                  key={index}
                  className="w-full p-6 rounded-md border-[1px] border-white-95 xs:flex xs:justify-between xs:items-center xs:gap-1.5 xl:p-4 lp:py-5 lp:px-6 lp:gap-1.5"
                >
                  <div className="flex-1 min-w-0 mb-7.5 xs:mb-0 space-y-0.5">
                    <p className="font-medium text-[16px] leading-6 lg:text-[16px] lg:leading-6">
                      {title}
                    </p>
                    <p className="text-grey-35">{label}</p>
                  </div>
                  <button className="flex gap-1 bg-white-95 items-center p-2.5 rounded-md justify-center flex-shrink-0 whitespace-nowrap">
                    <IoTimeOutline className="w-5 h-5" />
                    <p className="lp:leading-[17px]">{duration}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

CardCurriculumDetail.propTypes = {
  curricullums: PropTypes.array.isRequired,
};

export default CardCurriculumDetail;
